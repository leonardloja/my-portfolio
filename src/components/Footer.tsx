import { Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFile,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="flex justify-between">
      <ul className="flex gap-1">
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
            // TODO: Add email address
            href="#"
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
            // TODO: Add CV drive link
            href="#"
          >
            <IconFile stroke={2} />
            <Text>Résumé</Text>
          </a>
        </li>
      </ul>
      <p className="text-slate-400 dark:text-slate-400/30">
        &copy; 2025 Leonard Loja. All rights reserved.
      </p>
    </div>
  );
}
