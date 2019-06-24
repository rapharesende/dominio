# LiveBOOTP

The LiveBOOTP project is a solution in two parts:
* The BOOTP registry
* Targets images

## Table of Contents

* [Target image creation](#target-image-creation)
    * [Target creation step 1: Gitlab-CI job creation](#target-creation-step-1-gitlab-ci-job-creation)
    * [Target creation step 2: Docker file creation](#target-creation-step-2-docker-file-creation)
    * [Target creation step 3: startup script (optional)](#target-creation-step-3-startup-script-optional)
    * [Generic startup process](#generic-startup-process)
    * [Add custom startup script](#add-custom-startup-script)
    * [How to build the target](#how-to-build-the-target)
* [The BOOTP registry](#the-bootp-registry)
    * [How to build the registry](#how-to-build-the-registry)
    * [How to setup the registry](#how-to-setup-the-registry)
    * [How to start a registry on your workstation](#how-to-start-a-registry-on-your-workstation)
    * [Setup target virtual machine](#setup-target-virtual-machine)
    * [How to deploy the registry](#how-to-deploy-the-registry)
* [Annexes](#annexes)
    * [RC.local: useful functions](#rclocal-useful-functions)
        * [print_critical](#print_critical)
        * [print_error](#print_error)
        * [print_note](#print_note)
        * [print_info](#print_info)
        * [fetch_url](#fetch_url)
        * [get_cmdline_param](#get_cmdline_param)
        * [is_mounted](#is_mounted)
        * [is_identical_file](#is_identical_file)
        * [add_pertistant_storage](#add_pertistant_storage)
    * [LibeBOOTP kernel parameters](#libebootp-kernel-parameters)
        * [debug](#debug)
        * [fetch-curl-allow-insecure](#fetch-curl-allow-insecure)
        * [root-password-disabled](#root-password-disabled)
    * [The ci-toolbox command](#the-ci-toolbox-command)

## Target image creation
Each target image is generated using a simple way (Dockerfile based format) and produce, for each version, a set of file: kernel image + initrd + squashfs filesystem

You can create a new target in tree steps. To illustrate with an example, wee will create a nginx web server image named `nginx-web-server`.

There is two type of target image:
* **Intermediate image**: Used as base image by several targets
* **Final image**: image to deploy

