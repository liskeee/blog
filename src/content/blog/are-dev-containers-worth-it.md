---
title: 'Are Dev Containers Worth It?'
description: 'Unlock productivity with Dev Containers — learn what they are, how to use them, and why they are worth it.'
pubDate: '2024-11-01'
heroImage: '/covers/dev-containers.webp'
---

## Introduction

In today's software development world, it's more important than ever to have consistent and reproducible development environments.
Whether you're working alone or with a large team, getting rid of the classic

> It works on my machine ¯\_(ツ)\_/¯

problem (something I've said myself many times) is a big advantage.

**Dev Containers** are a powerful tool that can help you achieve this.

## What actually are Dev Containers?

They're containerized development environments that includes all the tools, runtimes, libraries, and configurations needed for a project by using a single configuration file.

### Key Benefits

- **Consistency**: Ensures every developer works in the same environment
- **Isolation**: Keeps project dependencies separate from your local machine
- **Portability**: Easily share environments across teams or machines
- **Scalability**: Simplifies onboarding and environment replication

### How They Work

At the core, a Dev Container uses a Docker image that contains all the necessary components for your project.
Tools like **Visual Studio Code (VS Code)** or **IntelliJ IDEA** can then connect to this container, providing a seamless development experience as if you were working locally.

## Requirements

- [Docker](https://www.docker.com/)

That's it! You don't need to install any additional software or dependencies aside of IDE which supports **Dev Containers**.

## Getting Started

I'll be using [Visual Studio Code](https://code.visualstudio.com/) because it's free, open-source, and has excellent support for **Dev Containers**.
As a sample project, I'll use the free Astro theme [dante-astro-theme](https://github.com/JustGoodUI/dante-astro-theme) so be aware that for you some steps may be different.

1. Open your project in VS Code.
   ![Open project in VS Code](/images/dev-containers/1.png)
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
   ![Install Dev Containers extension](/images/dev-containers/2.png)
3. Open command palette (Ctrl + Shift + P) and search for `Dev Containers: Add Dev Container Configuration Files...`.
   ![Add Dev Container Configuration Files](/images/dev-containers/3.png)
4. Select the appropriate template for your project. For me, it'll be the `Node.js & Typescript` template.
   ![Select Node.js template](/images/dev-containers/4.png)
5. After completing steps like selecting the version of Node.js or adding additional features, the extension will create a `.devcontainer` folder with a `devcontainer.json` file.
   Open generated `devcontainer.json` file and customize it according to your needs.
   ![Generated devcontainer.json file](/images/dev-containers/5.png)

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/typescript-node
{
  "name": "Node.js & TypeScript",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm"
  // Features to add to the dev container. More info: https://containers.dev/features.
  // "features": {},

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  //"forwardPorts": []

  // Use 'postCreateCommand' to run commands after the container is created.
  //"postCreateCommand": "yarn install",

  // Configure tool-specific properties.
  // "customizations": {},

  // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "root"
}
```

6. Reopen the project in the container by opening the command palette and searching for `Reopen in Container`.
   ![Reopen in Container](/images/dev-containers/6.png)

Basically that's it! You're now working in a containerized environment.
![Project in Container](/images/dev-containers/7.png)

## Customizing Dev Containers

You can customize the Dev Container configuration file to suit your project's needs.

### Forwarding Ports

If your application runs on a specific port inside the container, you can forward it to your local machine by adding the following configuration:

```json
{
  "forwardPorts": [4321]
}
```

### Post-Create Command

If you need to run additional commands after the container is created, you can use the `postCreateCommand` property:

```json
{
  "postCreateCommand": "yarn install"
}
```

### Extensions

You can define for example VS Code extensions inside the container by adding the following configuration:

```json
{
  "customizations": {
    "vscode": {
      "extensions": [
        "astro-build.astro-vscode",
        "esbenp.prettier-vscode",
        "yzhang.markdown-all-in-one",
        "dbaeumer.vscode-eslint"
      ]
    }
  }
}
```

Alternatively, you can install them manually, right-click on the extension, and select `Add to devcontainer.json`.
![Install extensions manually](/images/dev-containers/8.png)

![Customized devcontainer.json file](/images/dev-containers/9.png)

Remember to rebuild the container after making changes to the configuration file!

## Managing Dev Containers

1. Open `Remote Explorer` by clicking icon on the toolbar.
2. Select `Dev Containers` in the dropdown menu on the top.

![Open Remote Explorer](/images/dev-containers/10.png)

You can for example:

- **Reopen in Container**
- **Rebuild Container**
- **Remove Container**

## Additional informations

- **Linux-Based Environment**: Your development environment should be based on a Linux system
- **Custom Dockerfile**: You can create your own Dockerfile to serve as the foundation for your project
- **Multi-Container Applications**: Use Docker Compose to define applications that run across multiple containers
- **Shared Git Credentials**: No need to worry about Git credentials—they're shared between your local machine and the container

## Conclusion

To be honest, I've never used **Dev Containers** before, and I'm impressed by how easy they are to set up and how much they can improve the development workflow. Especially for new team members, it can be a game-changer because they don't need to install anything on their local machine or spend many hours reading the documentation and setting up the environment.

Of course, you need to spend some time setting up the configuration file, but usually, it's a one-time task with many benefits.

I'll definitely use it in my future projects, and I encourage you to do the same!

## Resources

- https://code.visualstudio.com/docs/devcontainers/containers
- https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
- https://www.jetbrains.com/help/idea/connect-to-devcontainer.html
