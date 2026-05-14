============
Installation
============

Currently Rumarino autonomy stack runs with ROS2 and a linux machine. The reason we have not ported 
the software to Windows mainly because Stonefish is not yet ported to Windows. We dont have current 
plans to make it work in Windows yet.


Prerequisites:

- Linux ( Ubuntu or Fedora)
- ROS2 ( Jazzy )


Optional Dependencies:
- CUDA 
- ZED SDK
- Docker



Build From Source:

1. Clone the repository

.. code-block:: bash

  git clone --recursive https://github.com/Rumarino-Team/autonomy-stack.git
  cd ./autonomy-stack


2. Install necessary packages

.. code-block:: bash

   sudo apt update
   sudo apt install -y python3 python3-pip python3-venv build-essential curl
   sudo apt install -y libclang-dev llvm-dev clang
   sudo apt install -y software-properties-common
   sudo add-apt-repository universe
   sudo apt update
   sudo apt install -y curl gnupg lsb-release
   sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

   # Install ROS 2 and dependencies
   sudo apt update
   sudo apt install -y \
     ros-jazzy-desktop \
     ros-jazzy-vision-msgs \
     ros-jazzy-sensor-msgs \
     ros-jazzy-geometry-msgs \
     ros-jazzy-rviz2 \
     ros-jazzy-usb-cam \
     libfreetype6-dev \
     libsdl2-dev \
     libglm-dev \
     libeigen3-dev \
     libogre-1.12-dev \
     libopencv-dev \
     libssl-dev \
     libboost-all-dev \
     libepoxy-dev \
     libtinyxml2-dev \
     ros-jazzy-pangolin \
     socat \
     pkg-config

3. Install the simulator

.. code-block:: bash

  cd ./vendor/stonefish
  mkdir -p build
  cd build
  cmake ..
  make -j16
  sudo make install


4. Build the ROS packages

.. code-block:: bash

   source /opt/ros/jazzy/setup.bash
   colcon build \
     --packages-select interfaces bringup mission_executor bridge_stonefish Stonefish stonefish_ros2 detection_mocker joy sdl2_vendor
   source install/setup.bash

.. note::

  We cover different ways to run the Visual Odometry and Perception modules as well as different
  hardware options. Those are not covered here because they are optional depending on what you
  want to implement.

  For now, this installation lets you run the simulation basic missions.

Run the simulator with this command:

.. code-block:: bash

  # proteus, prequalify mission
  ros2 launch bringup stonefish.launch.py \
    mission_name:=prequalify \
    auv_name:=proteus \
    env_file_name:=proteus_env.scn \
    headless:=false