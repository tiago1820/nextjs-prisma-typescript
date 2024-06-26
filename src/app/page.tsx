import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";

async function loadTasks() {
  return await prisma.task.findMany();
}

export const revalidate = 0;
// export const dynamic = "force-dynamic";

async function HomePage() {
  const tasks = await loadTasks();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default HomePage;
