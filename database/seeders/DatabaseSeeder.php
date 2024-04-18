<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::factory()->create([
            'id' => 1,
            'name' => 'Isai',
            'email' => 'isainahshunov@gmail.com',
            'password' => bcrypt('!@#Test#@!'),
            'email_verified_at' => now(),
        ]);

        $projects = Project::factory()
            ->count(30)
            ->create([
                'created_by' => $user->id,
                'updated_by' => $user->id,
            ]);

        foreach ($projects as $project) {
            $tasks = Task::factory()
                ->count(30)
                ->create([
                    'project_id' => $project->id,
                    'assigned_user_id' => $user->id,
                    'created_by' => $user->id,
                    'updated_by' => $user->id,
                ]);
        }
    }
}

?>