import { PROJECTS } from "@/constants";
import projects from "../projects.json";
import { syncopate } from "@/fonts";
import Image from "next/image";

interface IProps {
  params: { projectSlug: string };
}

export default function ProjectPage({ params: { projectSlug } }: IProps) {
  const project = PROJECTS.find(
    (project) => project.projectSlug === projectSlug
  );
  if (!project) {
    throw new Error(`Project not found for slug: ${projectSlug}`);
  }

  return (
    <main className="">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2
          className={`my-8 text-6xl tracking-tight font-extrabold text-center text-white ${syncopate.className}`}
        >
          {project.name}
        </h2>
        <div className="text-white">{project.description}</div>
        <div className="py-16 flex flex-col gap-8">
          <Image
            src={`/img/projects/1.jpg`}
            alt={project.name}
            width={800}
            height={600}
            className="rounded-lg"
          />
          <Image
            src={`/img/projects/2.jpg`}
            alt={project.name}
            width={800}
            height={600}
            className="rounded-lg"
          />
          <Image
            src={`/img/projects/3.jpg`}
            alt={project.name}
            width={800}
            height={600}
            className="rounded-lg"
          />
          <Image
            src={`/img/projects/4.jpg`}
            alt={project.name}
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}