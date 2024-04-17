<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Http\Resources\UserResource;
use App\Models\Project;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $query = Task::query();

        $sortFields = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name"))
        {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status"))
        {
            $query->where("status", request("status"));
        }

        $tasks = $query->orderBy($sortFields, $sortDirection)->paginate(10)->onEachSide(1);
       
        //Unlike typical .blade file sensitive info can be visible here
        //Do Not pass sensitive info to inertia php front page
        return inertia("Task/Index", [
            "tasks" => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $projects = Project::query()->orderBy('name', 'asc')->get();
        $users = User::query()->orderBy('name', 'asc')->get();


        return inertia("Task/Create", [
            'projects' => ProjectResource::collection($projects),
            'users' => UserResource::collection($users),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        //
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile */
        // dd($data); // <- dumps all entry data for validations
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) //if image exists we save it saving and updating data with image path and saving image + data in the database
        {
           $data['image_path'] = $image->store('task/' . Str::random(), 'public'); 
        }
        Task::create($data);

        return to_route('task.index')->with('success', 'Task was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
      //   $query = $task->tasks();
        // $sortFields = request("sort_field", 'created_at');
        // $sortDirection = request("sort_direction", "desc");

        // if (request("name"))
        // {
        //     $query->where("name", "like", "%" . request("name") . "%");
        // }
        // if (request("status"))
        // {
        //     $query->where("status", request("status"));
        // }

        // $tasks = $query->orderBy($sortFields, $sortDirection)->paginate(10)->onEachSide(1);

        return Inertia('Task/Show', [
            'task' => new TaskResource($task), 
            // "tasks" => TaskResource::collection($tasks),
            // 'queryParams' => request()->query() ?: null,
            // 'success' => session('success'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
        $projects = Project::query()->orderBy('name', 'asc')->get();
        $users = User::query()->orderBy('name', 'asc')->get();


        return inertia("Task/Edit", [
            'task' => new TaskResource($task),
            'projects' => ProjectResource::collection($projects),
            'users' => UserResource::collection($users),
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        //
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) //if image exists we save it saving and updating data with image path and saving image + data in the database
        {
            if ($task->image_path)
            {
                Storage::disk('public')->deleteDirectory(dirname($task->image_path));
            }
           $data['image_path'] = $image->store('task/' . Str::random(), 'public'); 
        }
        $task->update($data);

        return to_route('task.index')->with('success', "Task \"$task->name\" was updated successfully");  
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
        $name = $task->name;
        $task->delete();
        if ($task->image_path)
        {
            Storage::disk('public')->deleteDirectory(dirname($task->image_path));
        }
        return to_route('task.index')->with('success', "Task \"$name\" deleted");
    }

    public function myTasks()
    {
        $user = auth()->user();
        $query = Task::query()->where('assigned_user_id', $user->id);

        $sortFields = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name"))
        {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status"))
        {
            $query->where("status", request("status"));
        }

        $tasks = $query->orderBy($sortFields, $sortDirection)->paginate(10)->onEachSide(1);
       
        //Unlike typical .blade file sensitive info can be visible here
        //Do Not pass sensitive info to inertia php front page
        return inertia("Task/Index", [
            "tasks" => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);

    }
}
