import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { TASK_PRIORITY_CLASS_MAP, TASK_PRIORITY_TEXT_MAP,TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants.jsx";
import TaskTable from "../Task/TasksTable";

export default function Show({ auth, task }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {`Task "${task.name}"`}
            </h2>}
        >
            <Head title={`Task "${task.name}"`} />
            {/* <pre>{JSON.stringify(task)}</pre> */}
            <div className="px-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div>
                                <img src={task.image_path}
                                    alt=""
                                    className="w-full h-62 object-cover"
                                />
                            </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-4 grid-cols-2 mt-2">
                                {/* left side div */}
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">Task ID</label>
                                        <p className="mt-1">{task.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Task Name</label>
                                        <p className="mt-1">{task.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Task Priority</label>
                                        <p className="mt-1">
                                            <span
                                                className={
                                                    "px-2 py-1 rounded " + TASK_PRIORITY_CLASS_MAP[task.priority]
                                                }
                                            >
                                                <span className="text-white">
                                                    {TASK_PRIORITY_TEXT_MAP[task.priority]}
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Created By</label>
                                        <p className="mt-1">{task.createdBy.name}</p>
                                    </div>
                                </div>

                                {/* right side div */}
                                <div>
                                    <label className="font-bold text-lg">Due Date</label>
                                    <p className="mt-1">{task.due_date}</p>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Create Date</label>
                                        <p className="mt-1">{task.created_at}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Updated By</label>
                                        <p className="mt-1 underline text-blue-300">
                                        <Link href={route('project.show', task.project.id)}>
                                        {task.updatedBy.name}
                                        </Link>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Part of Project</label>
                                        <p className="mt-1 underline text-blue-300">
                                            <Link href={route("project.show", task.project.id)}>
                                            {task.project.name}
                                            </Link>
                                            </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Assigned User</label>
                                        <p className="mt-1">{task.assignedUser.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="font-bold text-lg">
                                    Task Description
                                </label>
                                <p className="mt-1">{task.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        <TaskTable tasks={tasks} queryParams={queryParams} hideTaskColumn={true}/>
                        </div>
                    </div>
                </div>
            </div> */}

        </AuthenticatedLayout>
    );
}