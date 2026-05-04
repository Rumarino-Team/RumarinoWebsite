=======================
Simulation Integrations
=======================

.. figure:: images/simulation_image.png
   :alt: Stonefish simulation environment
   :width: 900

Overview
========

We integrate Stonefish Simulation into the autonomy stack so you can run missions end-to-end in a realistic underwater environment.
This includes our own AUV models and integrations of well-known platforms used in the community.

One of our biggest features is the ability to simulate our entire autonomy stack in Stonefish,
compared to other AUV simulators where they limit themselves to work on a specific problem like navigation or perception. 
This allows us to test our entire autonomy stack in a realistic environment, and then transfer it to the real world with minimal changes.

Setup
=====

To run our simulations, you will need to follow the `installation instructions <installation.html>`_.

Supported Vehicles
==================

BlueROV2
--------

Launch BlueROV2 in simulation:

.. code-block:: bash

   source install/setup.bash
   ros2 launch bringup stonefish.launch.py \
     mission_name:=teleop \
     auv_name:=bluerov2 \
     env_file_name:=pool_env.scn \
     headless:=false \
     stonefish_only:=true

.. figure:: images/simulation_image.png
   :alt: BlueROV2 in Stonefish simulation
   :width: 800

GIRONA500
---------

Launch GIRONA500 in simulation:

.. code-block:: bash

   source install/setup.bash
   ros2 launch bringup stonefish.launch.py \
     mission_name:=teleop \
     auv_name:=girona500 \
     env_file_name:=pool_env.scn \
     headless:=false \
     stonefish_only:=true

.. figure:: images/simulation_image.png
   :alt: GIRONA500 in Stonefish simulation
   :width: 800


