import { prisma } from "@/libs/prisma";

async function loadTasks() {
  const tasks = await prisma.task.findMany();
  return tasks;
}

async function HomePage() {
  const tasks = await loadTasks();

  return (
    <div className="grid grid-cols-3 gap-3 mt-5">
      {tasks.map((task) => (
        <div className="bg-gray-900 p-3" key={task.id}>
          <h3 className="font-bold text-xl">{task.title}</h3>
          <p className="text-slate-300">{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
