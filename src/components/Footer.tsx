import { Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFile,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center space-y-1 md:flex-row md:justify-between md:space-y-0">
      <ul className="flex flex-wrap justify-center gap-1">
        <li>
          <a
            className="flex gap-0.5 hover:text-blue-700"
            target="_blank"
            href="https://www.github.com/leonardloja"
          >
            <IconBrandGithub stroke={2} />
            <Text>GitHub</Text>
          </a>
        </li>
        <Text>&#124;</Text>
        <li>
          <a
            className="flex gap-0.5 hover:text-blue-700"
            target="_blank"
            href="https://www.linkedin.com/in/leonard-loja-89960b309"
          >
            <IconBrandLinkedin stroke={2} />
            <Text>LinkedIn</Text>
          </a>
        </li>
        <Text>&#124;</Text>
        <li>
          <a
            className="flex gap-0.5 hover:text-blue-700"
            target="_blank"
            href="mailto:l.leonard.loja@gmail.com"
          >
            <IconMail stroke={2} />
            <Text>Contact Me</Text>
          </a>
        </li>
        <Text>&#124;</Text>
        <li>
          <a
            className="flex gap-0.5 hover:text-blue-700"
            target="_blank"
            href="https://drive.google.com/file/d/1GZuW3wZTKp0Me8ix1qOWmeLBpZXM5vPd/view?usp=sharing"
          >
            <IconFile stroke={2} />
            <Text>Résumé</Text>
          </a>
        </li>
      </ul>
      <Text className="text-slate-400 dark:text-slate-400/30">
        &copy; 2025 Leonard Loja. All rights reserved.
      </Text>
    </div>
  );
}
