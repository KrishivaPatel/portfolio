/* ============================================================
   EDIT THIS FILE. Nothing else.
   ------------------------------------------------------------
   To add an image or PDF:
     1. Drop the file into the  images/  folder
     2. Add a line to that project's  media:  array, e.g.
          { src: "images/injector-plate.png", caption: "Injector face, shear coaxial elements" }
     3. Save. Reload the page.

   PDFs work too:  { src: "images/drawing-pkg.pdf", caption: "Drawing package" }
   Leave  media: []  empty and the section shows a placeholder box.
   ============================================================ */

const PORTFOLIO = {

  profile: {
    name: "Krishiv Patel",
    tagline: "Propulsion and fluid hardware. Design, analysis, and test.",
    location: "Morris Plains, NJ",
    email: "krishivp23@gmail.com",
    phone: "973-255-6475",
    linkedin: "https://linkedin.com/in/krishivapatel",
    media: [
      { src: "images_optimized/plane2.jpeg", caption: "" }
    ],
    github: "",              // add your GitHub URL when ready
    resume: "Krishiv_Patel_Aerospace_Resume.pdf",

    // Shown as the hero spec block. Keep to 6 rows; they read as a data sheet.
    specs: [
      { k: "Degree",      v: "B.S. Aerospace Engineering, Rutgers" },
      { k: "Graduating",  v: "May 2027" },
      { k: "Minor",       v: "Mathematics, Energy Systems Certificate" },
      { k: "Focus",       v: "Propulsion, fluid systems, active flow control" },
      { k: "Published",   v: "IEEE MIT URTC 2026, GSET Research Journal" },
      { k: "Citizenship", v: "U.S. citizen" }
    ],

    intro: [
      "Half of what I do is CFD and design for experimental aerodynamics. The other half is propulsion. I am Head of Design on a 750 lbf bipropellant engine, and I have been in the Rutgers Rocket Propulsion Lab since March 2025 working on regenerative cooling.",
      "What I care about is owning a part end to end: drawing it, having it made, testing it, and working through the list of changes that comes back. The revision cycle is where you actually learn the hardware."
    ]
  },

  /* ==========================================================
     PROJECTS
     Reorder freely. Each one renders identically.
     ========================================================== */
  projects: [

    {
      id: "engine",
      title: "750 lbf Bipropellant Rocket Engine",
      org: "Rutgers Senior Design, RRPL-affiliated",
      role: "Head of Design",
      dates: "May 2026 – Present",
      group: "Propulsion & Fluid Systems",
      tools: ["SolidWorks", "ANSYS Fluent", "GD&T"],
      specs: [
        { k: "Thrust target", v: "750 lbf" },
        { k: "Propellants",   v: "IPA / N2O, pressure-fed" },
        { k: "Team",          v: "8 engineers" },
        { k: "My scope",      v: "Injector plate, flight integration, test stand" }
      ],
      summary: "The most competitive senior design track in Rutgers MAE. I own injector plate design and vehicle integration, and I am designing the static test stand we will cold-flow and hot-fire it on.",
      bullets: [
        "Converted injector element geometry from coaxial swirl to shear coaxial, for machinability and for uniform propellant distribution across the injector face.",
        "Redesigned the igniter interface around a C11-3 solid rocket motor adapter functioning as a replaceable canister, so the team can iterate between hot fires instead of rebuilding.",
        "Diagnosed the prior-generation engine: 50 lbf measured against a 750 lbf target. Traced to ignition not sustaining in the chamber, so combustion was happening downstream of the throat and the flow never choked.",
        "Own vehicle integration: propulsion-to-airframe interfaces, thrust structure load paths, and component packaging.",
        "Designing the static test stand, including feed system design and high-pressure operating procedures."
      ],
      media: [{src: "images_optimized/BiProp_Side_1.png", caption: "Side-view render of the 750 lbf bipropellant engine concept" }]
    },

    {
      id: "regen",
      title: "Regenerative Cooling, 750 lbf Lab Engine",
      org: "Rutgers Rocket Propulsion Lab",
      role: "Design & Aerodynamics",
      dates: "Mar 2025 – Present",
      group: "Propulsion & Fluid Systems",
      tools: ["ANSYS Fluent", "SolidWorks", "MATLAB"],
      specs: [
        { k: "Engine",   v: "750 lbf, pressure-fed N2O/IPA" },
        { k: "Result",   v: "3% reduction in chamber wall temperature" },
        { k: "Milestone", v: "Hot fire demonstration, May 2026" }
      ],
      summary: "The lab's own engine program, separate from the senior design vehicle that happens to share its thrust class. I contribute to the regenerative cooling design.",
      bullets: [
        "Perform coolant channel sizing and flow analysis. A set of design changes I supported brought chamber wall temperature down 3%.",
        "Size injector plate orifices to maintain thermal separation between regenerative coolant passages and the solid rocket motor igniter, translating hand calculations into geometry revisions.",
        "Supported the program through its hot fire demonstration in May 2026."
      ],
      media: [
        { src: "images_optimized/rocket1.png", caption: "Top-view schematic of the regenerative cooling rocket engine layout" },
        { src: "images_optimized/rocket2.png", caption: "Unfinished 3D view of the lab engine assembly and chamber geometry" }
      ]
    },

    {
      id: "bfs",
      title: "Backward-Facing Step: Planar vs Axisymmetric",
      org: "Rutgers, computational study",
      role: "Independent",
      dates: "2026",
      group: "Propulsion & Fluid Systems",
      tools: ["ANSYS Fluent", "MATLAB"],
      specs: [
        { k: "Solver",     v: "ANSYS Fluent" },
        { k: "Geometry",   v: "Backward-facing step, planar and axisymmetric" },
        { k: "Step location", v: "x = 4 mm, domain to 20 mm" },
        { k: "Regime",     v: "Laminar, peak velocity ~1.3e-2 m/s" }
      ],
      summary: "The backward-facing step is the canonical separated-flow validation case. I ran it in both planar and axisymmetric formulations to see how the assumption changes separation length and pressure recovery on otherwise identical geometry.",
      bullets: [
        "Resolved the recirculation bubble downstream of the step in both formulations, with pathlines showing the closed vortex and the reattachment point where the shear layer returns to the wall.",
        "Compared velocity fields, vector fields, and pathlines side by side. The axisymmetric case runs a lower peak velocity than the planar case on the same inlet condition, because area change with radius alters the effective expansion ratio.",
        "Tracked static pressure along the step face and the outer wall, capturing the suction peak at the step corner and the downstream pressure recovery as the flow reattaches.",
        "Extracted the outlet velocity profile to confirm the flow had redeveloped before the domain exit, so the boundary condition was not contaminating the solution."
      ],
      media: [
        { src: "images_optimized/Step planar.png",        caption: "Planar: velocity field, vector field, and pathlines. The recirculation vortex sits in the step corner." },
        { src: "images_optimized/Steps axisymmetric.png", caption: "Axisymmetric: same three views on identical geometry, showing a lower peak velocity and a modified reattachment." },
        { src: "images_optimized/step extra.png",         caption: "Outlet velocity profile, static pressure along the step and outer wall, and the velocity contour showing the separated region." }
      ]
    },

    {
      id: "actuator",
      title: "Pulsed-Air Actuator for Active Flow Control",
      org: "Rutgers Dept. of Mechanical & Aerospace Engineering",
      role: "Research Lead, Design & CFD",
      dates: "Mar 2025 – Present",
      group: "Aerodynamics & Flow Control",
      tools: ["ANSYS Fluent", "SolidWorks", "CFD"],
      specs: [
        { k: "Program budget", v: "$42,000 (department + state grant)" },
        { k: "Jet velocity",   v: "150 – 200 m/s" },
        { k: "Modulation",     v: "10 – 1000 Hz" },
        { k: "Tools",          v: "ANSYS Fluent, CFX, SolidWorks" },
        { k: "Tolerancing",    v: "ASME Y14.5-2018" }
      ],
      summary: "A deployable active flow control device intended to replace the fixed chines on a commercial engine nacelle. A chine is permanent geometry that sheds a vortex to keep flow attached over the wing at high angle of attack. You need it at takeoff and landing, and you carry its drag for the rest of the flight. This one would only be there when you want it.",
      bullets: [
        "Own the CFD and the parametric CAD, and tolerance every drawing for how the part will actually be made.",
        "Killed the first architecture. It met performance in simulation, but an external compressor feed coupled jet pressure to modulation frequency, and a manufacturability review with engineers from Calspan and GE found it could not be built.",
        "Re-architected around a localized plenum at the actuator, which decoupled pressure generation from flow modulation and made the geometry machinable.",
        "Aerodynamic validity reviewed by two former Boeing engineers, one a Technical Fellow.",
        "Fabrication and wind tunnel validation scheduled for 2026–27."
      ],
      media: [{src: "images_optimized/Research_Full.png", caption: "Isometric concept render with partial transparency" }]
    },

    {
      id: "biplane",
      title: "Biplane Aerodynamics and Flow Control",
      org: "NASA New Jersey Space Grant Consortium, Rutgers",
      role: "Experimental Aerodynamics Research Intern",
      dates: "May 2026 – Aug 2026",
      group: "Aerodynamics & Flow Control",
      tools: ["ANSYS Fluent", "XFLR5", "OnShape", "Wind tunnel"],
      specs: [
        { k: "Configurations", v: "51, across two test matrices" },
        { k: "Reynolds number", v: "20,100" },
        { k: "Peak L/D",       v: "9.12 (NACA 2212 × 2212, 0°/5° decalage)" },
        { k: "Monoplane baseline", v: "4.21" },
        { k: "Team",           v: "5 Governor's School scholars, directed" }
      ],
      summary: "A NASA-funded internship open only to James J. Slade Scholars. I set the project scope, pivoted the work to biplane decalage to address a real gap in the experimental literature, and directed five high school scholars selected from the top 64 in New Jersey.",
      bullets: [
        "Ran the full cycle: OnShape CAD, XFLR5 and ANSYS Fluent CFD, 3D printing, and wind tunnel testing.",
        "Built the test setup, the calibration procedure, and the data reduction workflow.",
        "Applied finite-span aspect-ratio corrections (AR = 5, e = 0.8) to separate 3D downwash from low-Reynolds viscous behavior.",
        "Identified a stall-order asymmetry: top-wing stall dominates total lift loss, and every best-performing configuration placed the greater angle of attack on the lower wing.",
        "Published in the The Governor's School of New Jersey Program in Engineering & Technology Research Journal and accepted to the 2026 IEEE MIT Undergraduate Research Technology Conference."
      ],
      media: [
        { src: "images_optimized/HEATMAP3D_Matrix1_LD (4).png", caption: "Lift-to-drag comparison across top-wing and bottom-wing airfoil combinations" },
        { src: "images_optimized/HEATMAP3D_Matrix2_LD (4).png", caption: "Lift-to-drag surface map for the 2212×2212 decalage matrix" },
        { src: "images_optimized/EXP_Matrix1_Combined (1).png", caption: "Experimental performance trends across lift coefficient and drag coefficient" },
        { src: "images/NJ Space Grant + JJ Slade - 2025-2026.pdf", caption: "Presentation to faculty and project stakeholders" }
      ]
    },

    {
      id: "windtunnel",
      title: "Wind Tunnel Airfoil Lab",
      org: "Rutgers Dept. of Mechanical & Aerospace Engineering",
      role: "Wind Tunnel Lab Developer",
      dates: "Aug 2026 – Present",
      group: "Aerodynamics & Flow Control",
      tools: ["Wind tunnel", "SolidWorks", "Data reduction"],
      specs: [
        { k: "Becoming",  v: "Standard module, Rutgers MAE Senior Lab" },
        { k: "Audience",  v: "Required course, all Aerospace and Mechanical seniors" },
        { k: "Source",    v: "52-run summer research campaign" }
      ],
      summary: "Converting the summer research campaign into a single-session student experiment that will be run by students I will never meet. That changed how I write documentation: it has to work without me in the room.",
      bullets: [
        "Authored the test methodology, calibration procedure, data reduction workflow, and documented limitations that form the instructional basis of the module.",
        "Redesigning and reprinting the airfoil model set for repeated student use.",
        "Working with the wind tunnel technician and two other developers."
      ],
      media: [{ src: "images/AirfoilLabManual-Matt_Rev.pdf", caption: "Wind tunnel test manual for the airfoil lab module" }]
    },

    {
      id: "hypersonics",
      title: "Nose Cone Aerothermal Analysis",
      org: "University Consortium for Applied Hypersonics",
      role: "Aerodynamics Team Member",
      dates: "Jul 2025 – Dec 2025",
      group: "Aerodynamics & Flow Control",
      tools: ["ANSYS Fluent", "ANSYS Mechanical"],
      specs: [
        { k: "Flow solution", v: "ANSYS Fluent" },
        { k: "Conduction",    v: "ANSYS Mechanical, Transient Thermal" },
        { k: "Study",         v: "Blunt vs sharp trade study" }
      ],
      summary: "Analyzed nose cone geometries at hypersonic conditions to characterize shockwave structure and aerodynamic heating, splitting the flow solution from the conduction analysis.",
      bullets: [
        "Conducted a blunt versus sharp nose cone trade study balancing drag against stagnation heating.",
        "Integrated an internal honeycomb pattern for conductive heat dissipation.",
        "Contributed to wind tunnel test protocols for hypersonic flow validation, correlating computational predictions with experimental data."
      ],
      media: []
    },

    {
      id: "cfd-airfoil",
      title: "CFD Study of Camber and Thickness Effects on Stall",
      org: "Rutgers, computational study",
      role: "Independent",
      dates: "2026",
      group: "Aerodynamics & Flow Control",
      tools: ["ANSYS Fluent", "MATLAB"],
      specs: [
        { k: "Airfoils",   v: "NACA 2412, 0024, 2400" },
        { k: "Conditions", v: "0° – 25° AoA, V = 100 m/s" },
        { k: "Stall onset", v: "≈15° AoA, peak C_L ≈ 1.36 (2412)" },
        { k: "Key result", v: "Unsteady C_L 1.192 vs steady 0.768, 55% higher" }
      ],
      summary: "A steady and unsteady CFD comparison isolating how camber and thickness independently affect lift curve slope and stall behavior, and showing why a steady solver cannot be trusted post-stall.",
      bullets: [
        "Computed lift coefficients and mapped streamlines and velocity contours across the angle of attack sweep.",
        "Benchmarked results against Joukowsky theory: camber raises C_L across all angles and shifts the zero-lift angle below 0°, while thickness smooths stall by delaying leading-edge separation.",
        "Ran transient simulations at 25° deep stall to capture impulsive startup, leading-edge separation, recirculation zone formation, and fully developed periodic vortex shedding.",
        "Demonstrated the time-averaged unsteady C_L is 55% higher than the steady-solver value, establishing that steady simulations underpredict post-stall lift and that an unsteady formulation is physically necessary for deep-stall analysis."
      ],
      media: [{ src: "images/Computational Investigation of Airfoil Aerodynamics and Flow Control.pdf", caption: "CFD analysis of airfoil aerodynamics and stall behavior in ANSYS Fluent" }]
    },

    {
      id: "dbf",
      title: "AIAA Design/Build/Fly Aircraft",
      org: "RU Airborne, Rutgers University",
      role: "Aerodynamics & Aerostructures",
      dates: "Oct 2023 – May 2026",
      group: "Structures & Mechanical",
      tools: ["SolidWorks", "XFLR5", "ANSYS"],
      specs: [
        { k: "Competition", v: "12th of 107, AIAA DBF 2024" },
        { k: "My scope",    v: "Ribs, stringers, landing gear" },
        { k: "Aero tools",  v: "XFLR5, ANSYS" }
      ],
      summary: "Two and a half years on the team, split across structures and aerodynamics.",
      bullets: [
        "Designed ribs, stringers, and landing gear as an aerostructures member, validating flight-critical components in SolidWorks.",
        "Improved aerodynamic efficiency 20% by optimizing the mission-specific airfoil selection through iterative modeling in XFLR5 and ANSYS."
      ],
      media: [
        { src: "images_optimized/Airborne.JPG", caption: "AIAA Design/Build/Fly aircraft during competition preparation" },
        { src: "images_optimized/airborne2.jpeg", caption: "Fuselage section that was diagnosed and redesigned to improve structural alignment" }]
    },

    {
      id: "composites",
      title: "Composite Laminate Strength Analysis",
      org: "Aerospace Materials (650:449), Prof. Mark Gurvich",
      role: "Independent, four-part study",
      dates: "Feb 2026 – Apr 2026",
      group: "Structures & Mechanical",
      tools: ["MATLAB", "ANSYS", "Composite analysis"],
      specs: [
        { k: "Material", v: "SM and HM carbon/epoxy" },
        { k: "Layup",    v: "Symmetric 8-ply [+Θ/−Θ/+30°/−30°]s" },
        { k: "Criteria", v: "Hashin (1980), maximum stress" },
        { k: "Result",   v: "Optimum ply angle 33°, 22% margin improvement" },
        { k: "Code",     v: "~400 lines MATLAB, custom functions" }
      ],
      summary: "A four-part MATLAB suite built from first principles, moving from single-ply anisotropy through full laminate strength prediction.",
      bullets: [
        "Stress and strain transformation between material and global frames, with anisotropy swept over ply orientation.",
        "Effective laminate stiffness from the [A] matrix, mid-plane strains, and ply-level stress recovery.",
        "First-ply-failure prediction using Hashin and maximum-stress criteria, with 2D and 3D failure envelopes generated by bisection search.",
        "Identified matrix tension in the −67.8° ply as the governing failure mode, and swept ply orientation to an optimum at 33° that raised the first-ply-failure margin 22%.",
        "Showed shear was the dominant load, exceeding ply shear strength by 6.3 times."
      ],
      media: [
        { src: "images/Analysis of HM Carbon (Pan).pdf",},
        { src: "images/Analysis of SM Carbon Fiber (Pan).pdf",},
        { src: "images/Anisotropic Strength Analysis (SM Carbon, Pan).pdf",},
        { src: "images/Laminated Strength Analysis (SM Carbon Composite, Hashin [1980] Failure Criterion).pdf",}
      ]
    },

    {
      id: "phoneholder",
      title: "Universal Phone Holder",
      org: "Design of Mechanical Components (650:342)",
      role: "CAD and GD&T lead",
      dates: "Sep 2025 – Dec 2025",
      group: "Structures & Mechanical",
      tools: ["SolidWorks", "GD&T", "ANSYS Mechanical"],
      specs: [
        { k: "Assembly",   v: "4 subassemblies: mount, arm, damper, clamping" },
        { k: "Tolerancing", v: "Full ASME Y14.5 stack" },
        { k: "Materials",  v: "Aluminum alloy, PC/ABS" },
        { k: "Outcome",    v: "Adopted as the course reference example" }
      ],
      summary: "A four-subassembly parametric mechanism with a complete tolerance stack. The instructor adopted my drawing package as the reference example of the final project for subsequent semesters.",
      bullets: [
        "Produced a complete tolerance stack: datum schemes, composite position tolerances, MMC and LMC modifiers, section and detail views.",
        "Designed for manufacturability across aluminum alloy and PC/ABS components.",
        "Validated with ANSYS stress simulation.",
        "Designed within the capabilities of equipment I am certified to operate: Shopbot CNC, laser cutter, and FDM printing.",
        "Presented to an audience of 300+ students and faculty."
      ],
      media: [
        { src: "images/all_drawings.pdf", caption: "Complete drawing package with GD&T for the critical components" },
        { src: "images/Video one.mp4", caption: "Phone holder assembly video 1" },
        { src: "images/video two.mp4", caption: "Phone holder assembly video 2" },
        { src: "images/video three.mp4", caption: "Phone holder assembly video 3" },
        { src: "images_optimized/LABLED ISOMETRIC.jpg", caption: "Labeled isometric of the universal phone holder assembly" }
      ]
    },

    {
      id: "cantilever",
      title: "Cantilever Beam Stress and Fatigue Life",
      org: "Rutgers, finite element study",
      role: "Independent",
      dates: "Jun 2026",
      group: "Structures & Mechanical",
      tools: ["ANSYS Mechanical", "MATLAB"],
      specs: [
        { k: "Solver",            v: "ANSYS Mechanical, static structural" },
        { k: "Peak von Mises",    v: "431.86 MPa" },
        { k: "Peak max principal", v: "481.68 MPa" },
        { k: "Fatigue life, VM",  v: "35,544 cycles minimum" },
        { k: "Fatigue life, MPT", v: "10,251 cycles minimum" }
      ],
      summary: "A finite element study of a cantilever beam under end loading, comparing stress measures and then carrying both into a fatigue life prediction to see how much the choice of failure theory changes the answer.",
      bullets: [
        "Compared equivalent (von Mises) stress against maximum principal stress across the same load case. Both localize at the fillet where the beam meets the fixed support, but max principal returns the higher peak and captures the compressive region von Mises cannot distinguish.",
        "Ran fatigue life prediction under both theories. Maximum principal predicts 10,251 cycles to failure against 35,544 for von Mises, so the theory choice moves the answer by more than a factor of three.",
        "Both predictions place minimum life at the same location, immediately downstream of the fillet, with the outer span surviving past the 1e6 cycle cutoff.",
        "The practical conclusion is that for a ductile beam in bending, von Mises is the appropriate criterion, and using max principal here would drive an unnecessarily conservative design."
      ],
      media: [
        { src: "images_optimized/cantilever1.png",     caption: "Equivalent (von Mises) stress, 431.86 MPa peak, against maximum principal stress, 481.68 MPa peak. Both localize at the support fillet." },
        { src: "images_optimized/cantileverVM.png",    caption: "Fatigue life under von Mises: 35,544 cycles minimum." },
        { src: "images_optimized/cantileverMPT.png",   caption: "Fatigue life under maximum principal: 10,251 cycles minimum, roughly a third of the von Mises prediction." }
      ]
    }
  ],

  /* ========================================================== */
  publications: [
    {
      title: "Experimental Investigation of Airfoil Aerodynamics and Flow Control: Mono and Biplane Configurations",
      venue: "2026 IEEE MIT Undergraduate Research Technology Conference",
      note: "Accepted, presenting October 2026. Co-corresponding author with Dr. Edward DeMauro.",
      link: "",
      media: [{ src: "images/MIT IEEE Paper_KrishivAmitPatel (1).pdf", caption: "Accepted paper for the 2026 IEEE MIT Undergraduate Research Technology Conference" }]
    },
    {
      title: "Experimental Investigation of Airfoil Aerodynamics and Flow Control",
      venue: "GSET Research Journal, Governor's School of New Jersey",
      note: "Published July 2026. Sole corresponding author.",
      link: "",
      media: [{ src: "images/airfoilpaperfinal (3).pdf", caption: "Published research paper from the Governor's School of New Jersey engineering journal" }]
    }
  ],

  education: {
    school: "Rutgers University, School of Engineering",
    degree: "B.S. Aerospace Engineering, Minor in Mathematics, Energy Systems Certificate",
    dates: "Sep 2023 – May 2027",
    items: [
      "James J. Slade Scholar: graduate research program, 6 credits of graduate independent research (16:650:542, 16:650:543)",
      "Dean's List, 4 semesters",
      "NASA L'SPACE Mission Concept Academy, Fall 2026: thermal subsystem engineer taking a spacecraft mission concept through a NASA-reviewed PDR",
      "Francisco Diaz-Masso Engineering Scholarship, NASA Space Grant Scholarship, Rutgers School of Engineering Scholarship",
      "Private Pilot Ground School completed; endorsed for FAA Private Pilot written examination"
    ],
    media: [{ src: "images_optimized/plane1.jpeg",}]
  },

  skills: [
    { group: "Analysis",  items: "ANSYS Fluent, ANSYS CFX, ANSYS Mechanical (Transient Thermal), XFLR5, MATLAB, Python, LabVIEW, classical lamination theory, composite failure criteria" },
    { group: "Design",    items: "SolidWorks, OnShape, ANSYS SpaceClaim, GD&T (ASME Y14.5-2018), design for manufacturability" },
    { group: "Experimental", items: "Wind tunnel testing and calibration, hot-wire anemometry, smoke flow visualization, data acquisition" },
    { group: "Fabrication", items: "Shopbot CNC, laser cutting, FDM 3D printing (certified operator)" }
  ]
};
