import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  Camera,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Layers3,
  Radar,
  Route,
  ShipWheel,
  Terminal,
  Wrench,
} from 'lucide-react';

const documentationSections = [
  { href: '#overview', label: 'Overview' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#modules', label: 'Modules' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#repository', label: 'Repository' },
  { href: '#quick-start', label: 'Quick Start' },
];

const coreModules = [
  {
    name: 'Data Engine',
    path: 'docs/data-engine.rst',
    icon: Database,
    image: '/software-docs/data-engine.jpeg',
    alt: 'Data Engine user interface',
    summary:
      'Full-stack dataset management and labeling for faster perception training, with human-in-the-loop workflows and foundation-model assistance.',
    href: '/autonomy-docs/data-engine.html',
  },
  {
    name: 'Sim2Real Tools',
    path: 'docs/sim2real-tools.rst',
    icon: Radar,
    image: '/software-docs/simulation.png',
    alt: 'Stonefish simulation environment',
    summary:
      'Domain randomization, calibration-aware testing, and repeatable evaluation utilities that reduce the gap between simulation and pool testing.',
    href: '/autonomy-docs/sim2real-tools.html',
  },
  {
    name: 'Simulation Integrations',
    path: 'docs/simulation-integrations.rst',
    icon: Boxes,
    image: '/software-docs/simulation.png',
    alt: 'Underwater simulation scene',
    summary:
      'Stonefish scenarios for Hydrus, Proteus, BlueROV2, and Girona500 that make end-to-end mission testing possible before hardware runs.',
    href: '/autonomy-docs/simulation-integrations.html',
  },
  {
    name: 'Controllers and Planners',
    path: 'docs/controllers-planners.rst',
    icon: Route,
    image: '/software-docs/simulation.png',
    alt: 'Autonomous navigation simulation',
    summary:
      'Mission logic, planning, and vehicle control components built as simple, testable blocks for both simulated and real AUVs.',
    href: '/autonomy-docs/controllers-planners.html',
  },
  {
    name: 'Perception',
    path: 'docs/perception.rst',
    icon: Camera,
    image: '/software-docs/orb-slam.png',
    alt: 'ORB-SLAM map viewer',
    summary:
      'Visual odometry, SLAM, inertial fusion, object detection, and learned models that turn camera and IMU streams into actionable state.',
    href: '/autonomy-docs/perception.html',
  },
  {
    name: 'Blender-Stonefish Integration',
    path: 'docs/blender-stonefish-integration.rst',
    icon: Wrench,
    image: '/software-docs/blender-before.png',
    alt: 'Blender scene for simulation authoring',
    summary:
      'A reproducible authoring pipeline for exporting simulation assets, AUV models, and underwater environments from Blender into Stonefish.',
    href: '/autonomy-docs/blender-stonefish-integration.html',
  },
];



const setupSteps = [
  'Clone the repository with submodules.',
  'Install ROS 2 Jazzy, compiler toolchains, Rust, and simulator dependencies.',
  'Build Stonefish when running local simulation.',
  'Build and source the ROS 2 workspace.',
  'Launch a headless mission or a full Stonefish scenario.',
];

const codeBlocks = [
  {
    label: 'Docker validation',
    code: 'docker build -t rumarino-headless:latest .\ndocker run --rm rumarino-headless:latest bash -c "source /opt/ros/jazzy/setup.bash && source /ros2_ws/install/setup.bash && ros2 launch bringup test_mission_executor_headless.launch.py mission_name:=prequalify controller_name:=stonefish_hydrus env_file_name:=hydrus_env_headless.scn"',
  },
  {
    label: 'Computer vision launch',
    code: 'colcon build --packages-select zed_msg zed_custom_wrapper\nsource ./install/setup.bash\nros2 launch zed_custom_wrapper zed_custom.launch.py onnx_model_path:=./src/zed_custom_wrapper/yolov8n.onnx',
  },
  {
    label: 'ORB-SLAM launch',
    code: 'ros2 launch orb_slam3_ros2 orb_slam_sim_launch.py use_viewer:=true use_imu:=true image_topic:=/camera/color/image_raw imu_topic:=/vectornav/imu',
  },
];

export default function SoftwareDocumentationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden bg-[#171919]">
        <div className="absolute inset-0">
          <Image
            src="/software-docs/simulation.png"
            alt="RUMarino autonomy stack simulation"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#171919]/85 to-black" />
        </div>

        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="max-w-5xl">


            <h1 className="font-headline text-5xl font-bold tracking-wide md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-[#00A68C] via-[#51DFC9] to-white bg-clip-text text-transparent">
                SOFTWARE DOCUMENTATION
              </span>
            </h1>

            <p className="mt-6 max-w-3xl font-roboto text-lg leading-relaxed text-gray-300 md:text-xl">
              Technical overview of the RUMarino Autonomy Stack: the open-source software
              system that connects perception, simulation, mission execution, control,
              hardware bridges, and data workflows for autonomous underwater vehicles.
            </p>
{/* 
            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ['Middleware', 'ROS 2'],
                ['Simulator', 'Stonefish'],
                ['Mission Core', 'Rust'],
                ['Target', 'Edge PC'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur">
                  <p className="font-headline text-2xl text-white">{value}</p>
                  <p className="mt-1 font-roboto text-xs uppercase tracking-wider text-gray-400">{label}</p>
                </div>
              ))}
            </div> */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/software/docs"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00A68C] to-[#51DFC9] px-6 py-4 font-roboto font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-[#00A68C] hover:to-[#1FB355]"
              >
                Open Sphinx Docs
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/autonomy-docs/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#00A68C]/30 bg-black/50 px-6 py-4 font-roboto font-bold text-white backdrop-blur transition-colors hover:border-[#51DFC9]/60 hover:bg-white/5"
              >
                View Static HTML
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section id="modules" className="bg-[#171919] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-[#51DFC9]">
              <FileCode2 className="h-6 w-6" />
              <span className="font-roboto text-sm font-bold uppercase tracking-wider">Modules and Solutions</span>
            </div>
            <h2 className="font-headline text-4xl tracking-wide md:text-5xl">Documentation</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreModules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="group"
              >
                <article className="overflow-hidden rounded-2xl border border-[#00A68C]/20 bg-gradient-to-br from-[#1a1d1d] to-black shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00A68C]/60 hover:shadow-2xl hover:shadow-[#00A68C]/20">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={module.image}
                      alt={module.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <module.icon className="absolute bottom-4 left-4 h-8 w-8 text-[#51DFC9]" />
                  </div>
                  <div className="p-6">
                    <p className="font-code text-xs text-[#51DFC9]">{module.path}</p>
                    <h3 className="mt-2 font-headline text-2xl text-white">{module.name}</h3>
                    <p className="mt-3 font-roboto text-sm leading-relaxed text-gray-400">{module.summary}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#51DFC9] opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-xs font-bold">Read Documentation</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
