import { Text } from "@mantine/core";
import {
  IconAt,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
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
            href="https://www.github.com/leonardloja"
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
            href="https://www.github.com/leonardloja"
          >
            <IconBrandX stroke={2} />
            <Text>Twitter</Text>
          </a>
        </li>
        <Text>&#124;</Text>
        <li>
          <a
            className="flex gap-0.5 hover:text-blue-700"
            target="_blank"
            href="https://www.github.com/leonardloja"
          >
            <IconMail stroke={2} />
            <Text>Contact Me</Text>
          </a>
        </li>
      </ul>
      <p className="text-slate-400 dark:text-slate-400/30">
        &copy; 2025 Leonard Loja. All rights reserved.
      </p>
    </div>
  );
}
