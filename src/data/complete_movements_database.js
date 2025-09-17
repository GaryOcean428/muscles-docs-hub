// Complete CrossFit Movements Database - ALL Official CrossFit Movements
// Import all movement images

// Existing movements
import airSquatDemo from '../assets/images/movements/braden_air_squat_demo.png'
import backSquatDemo from '../assets/images/movements/back_squat_demo.png'
import deadliftDemo from '../assets/images/movements/deadlift_demo.png'
import boxJumpDemo from '../assets/images/movements/box_jump_demo.png'
import burpeeSequence from '../assets/images/movements/burpee_sequence.png'
import benchPressDemo from '../assets/images/movements/bench_press_demo_new.png'
import pullupVariations from '../assets/images/movements/pullup_variations.png'
import kettlebellSwingDemo from '../assets/images/movements/kettlebell_swing_demo.png'
import doubleUnderDemo from '../assets/images/movements/double_under_demo.png'
import pistolSquatDemo from '../assets/images/movements/pistol_squat_demo.png'
import ringDipDemo from '../assets/images/movements/ring_dip_demo.png'
import rowingDemo from '../assets/images/movements/rowing_demo.png'
import thrusterDemo from '../assets/images/movements/thruster_demo.png'
import wallBallShotDemo from '../assets/images/movements/wall_ball_shot_demo.png'
import bradenDeadliftDemo from '../assets/images/movements/braden_deadlift_demo.png'
import bradenPushPressDemo from '../assets/images/movements/braden_push_press_demo.png'
import kettlebellSwing from '../assets/images/movements/kettlebell_swing.png'
import squatProgression from '../assets/images/movements/squat_progression.png'

// Complete movements database with ALL CrossFit movements
export const movementDatabase = {
  Foundational: [
    {
      id: 'air-squat',
      name: 'The Air Squat',
      description: 'The foundation of all squatting movements - builds lower body strength and mobility',
      difficulty: 'Beginner',
      category: 'Foundational',
      image: airSquatDemo,
      muscleGroups: ['Quads', 'Glutes', 'Hamstrings'],
      instructions: [
        'Stand with feet shoulder-width apart',
        'Lower hips back and down, keeping chest up',
        'Descend until hip crease is below knee cap',
        'Drive through heels to return to standing'
      ],
      commonFaults: [
        'Knees caving inward',
        'Weight shifting to toes',
        'Torso falling forward',
        'Not reaching full depth'
      ],
      proTips: [
        'Keep weight on heels throughout movement',
        'Maintain neutral spine position',
        'Drive knees out in line with toes',
        'Practice mobility daily for better depth'
      ]
    },
    {
      id: 'back-squat',
      name: 'The Back Squat',
      description: 'The king of lower body strength movements - builds massive leg and core strength',
      difficulty: 'Intermediate',
      category: 'Foundational',
      image: backSquatDemo,
      muscleGroups: ['Quads', 'Glutes', 'Hamstrings'],
      instructions: [
        'Position bar on upper back (high bar) or rear delts (low bar)',
        'Unrack and step back with feet shoulder-width apart',
        'Descend by pushing hips back and bending knees',
        'Drive through heels to return to starting position'
      ],
      commonFaults: [
        'Bar rolling down back',
        'Forward lean of torso',
        'Knees caving inward',
        'Partial range of motion'
      ],
      proTips: [
        'Create shelf with upper back muscles',
        'Maintain tight core throughout',
        'Control descent, explosive ascent',
        'Breathe at top, hold during rep'
      ]
    },
    {
      id: 'deadlift',
      name: 'The Deadlift',
      description: 'The king of all lifts - builds total body strength and power',
      difficulty: 'Intermediate',
      category: 'Foundational',
      image: deadliftDemo,
      muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
      instructions: [
        'Stand with feet hip-width apart, bar over mid-foot',
        'Hinge at hips, grip bar with hands outside legs',
        'Lift chest, engage lats, drive through heels',
        'Extend hips and knees simultaneously to standing'
      ],
      commonFaults: [
        'Bar drifting away from body',
        'Rounding of lower back',
        'Hyperextending at top',
        'Knees caving inward'
      ],
      proTips: [
        'Keep bar close to body throughout',
        'Engage lats to protect spine',
        'Drive floor away with feet',
        'Finish with hips, not back'
      ]
    },
    {
      id: 'front-squat',
      name: 'The Front Squat',
      description: 'Squat with bar in front rack position - builds core and quad strength',
      difficulty: 'Intermediate',
      category: 'Foundational',
      image: squatProgression,
      muscleGroups: ['Quads', 'Glutes', 'Core'],
      instructions: [
        'Rest bar on front of shoulders in rack position',
        'Keep elbows high and chest up',
        'Descend into squat maintaining upright torso',
        'Drive through heels to return to standing'
      ],
      commonFaults: [
        'Elbows dropping during squat',
        'Forward lean losing bar',
        'Wrists bearing weight',
        'Shallow depth'
      ],
      proTips: [
        'Practice front rack mobility daily',
        'Keep elbows high throughout movement',
        'Use fingertip grip, not full hand',
        'Engage core to maintain posture'
      ]
    },
    {
      id: 'overhead-squat',
      name: 'The Overhead Squat',
      description: 'Squat with weight held overhead - ultimate mobility and stability test',
      difficulty: 'Advanced',
      category: 'Foundational',
      image: squatProgression,
      muscleGroups: ['Full Body', 'Core', 'Shoulders'],
      instructions: [
        'Hold barbell overhead with wide grip',
        'Descend into squat keeping bar overhead',
        'Maintain active shoulders throughout',
        'Drive through heels to return to standing'
      ],
      commonFaults: [
        'Bar moving forward',
        'Shoulders not active',
        'Poor ankle mobility',
        'Torso falling forward'
      ],
      proTips: [
        'Work on shoulder and ankle mobility',
        'Keep bar directly over mid-foot',
        'Practice with PVC pipe first',
        'Engage lats to stabilize bar'
      ]
    }
  ],
  
  Bodyweight: [
    {
      id: 'abmat-situp',
      name: 'The AbMat Sit-up',
      description: 'Core exercise using AbMat for full range of motion and spinal extension',
      difficulty: 'Beginner',
      category: 'Bodyweight',
      image: burpeeSequence,
      muscleGroups: ['Abs', 'Hip Flexors', 'Core'],
      instructions: [
        'Lie on AbMat with lower back supported',
        'Feet flat on floor, knees bent',
        'Sit up touching hands to floor behind head',
        'Return to starting position with control'
      ],
      commonFaults: [
        'Not using full range of motion',
        'Pulling on neck',
        'Feet coming off floor',
        'Rushing through reps'
      ],
      proTips: [
        'Focus on spinal articulation',
        'Keep feet planted throughout',
        'Control both up and down phases',
        'Breathe out on the way up'
      ]
    },
    {
      id: 'burpee',
      name: 'The Burpee',
      description: 'Full-body conditioning movement - combines squat, plank, push-up, and jump',
      difficulty: 'Intermediate',
      category: 'Bodyweight',
      image: burpeeSequence,
      muscleGroups: ['Full Body', 'Cardiovascular', 'Core'],
      instructions: [
        'Start standing, drop into squat with hands on floor',
        'Jump feet back into plank position',
        'Perform push-up (optional)',
        'Jump feet back to squat, then jump up with arms overhead'
      ],
      commonFaults: [
        'Sagging hips in plank',
        'Incomplete hip extension at top',
        'Slow transitions between positions',
        'Poor push-up form'
      ],
      proTips: [
        'Maintain strong plank position',
        'Use smooth, flowing transitions',
        'Jump feet wide for easier squat',
        'Focus on breathing rhythm'
      ]
    },
    {
      id: 'burpee-box-jump-over',
      name: 'The Burpee Box Jump-over',
      description: 'Burpee combined with box jump-over for increased difficulty',
      difficulty: 'Advanced',
      category: 'Bodyweight',
      image: boxJumpDemo,
      muscleGroups: ['Full Body', 'Power', 'Coordination'],
      instructions: [
        'Perform burpee next to box',
        'Jump up and over box landing on other side',
        'Turn around and repeat on other side',
        'Maintain rhythm throughout'
      ],
      commonFaults: [
        'Stepping instead of jumping over',
        'Poor landing mechanics',
        'Losing rhythm',
        'Inadequate box clearance'
      ],
      proTips: [
        'Focus on soft landings',
        'Maintain consistent pace',
        'Use arms for momentum',
        'Practice box jump-overs separately first'
      ]
    },
    {
      id: 'box-jump',
      name: 'The Box Jump',
      description: 'Explosive jumping movement - develops power and coordination',
      difficulty: 'Intermediate',
      category: 'Bodyweight',
      image: boxJumpDemo,
      muscleGroups: ['Quads', 'Glutes', 'Calves'],
      instructions: [
        'Stand arm\'s length from box',
        'Swing arms back while loading hips',
        'Jump explosively onto box, landing softly',
        'Stand to full hip extension on box'
      ],
      commonFaults: [
        'Jumping too close to box',
        'Hard landing on box',
        'Not standing fully on box',
        'Jumping down instead of stepping'
      ],
      proTips: [
        'Focus on landing softly',
        'Use arms for momentum',
        'Step down to preserve joints',
        'Start with lower box height'
      ]
    },
    {
      id: 'box-step-up',
      name: 'The Box Step-up',
      description: 'Unilateral leg exercise stepping onto elevated surface',
      difficulty: 'Beginner',
      category: 'Bodyweight',
      image: boxJumpDemo,
      muscleGroups: ['Quads', 'Glutes', 'Calves'],
      instructions: [
        'Place one foot completely on box',
        'Step up driving through heel on box',
        'Stand to full hip extension on box',
        'Step down with control'
      ],
      commonFaults: [
        'Pushing off bottom foot',
        'Partial foot placement on box',
        'Not standing fully on box',
        'Using momentum instead of strength'
      ],
      proTips: [
        'Focus on working leg only',
        'Control the movement',
        'Full foot contact on box',
        'Alternate legs or complete sets'
      ]
    },
    {
      id: 'butterfly-pullup',
      name: 'The Butterfly Pull-up',
      description: 'Advanced kipping pull-up with continuous circular motion',
      difficulty: 'Advanced',
      category: 'Bodyweight',
      image: pullupVariations,
      muscleGroups: ['Lats', 'Biceps', 'Core'],
      instructions: [
        'Hang from bar with hollow position',
        'Initiate with lat pull and hip drive',
        'Create circular motion through hips',
        'Maintain rhythm for multiple reps'
      ],
      commonFaults: [
        'Poor timing and rhythm',
        'Inadequate lat engagement',
        'Losing hollow position',
        'Inefficient hip drive'
      ],
      proTips: [
        'Master kipping pull-ups first',
        'Focus on rhythm over speed',
        'Engage lats throughout',
        'Practice hip drive separately'
      ]
    },
    {
      id: 'dip',
      name: 'The Dip',
      description: 'Upper body pushing exercise on parallel bars or rings',
      difficulty: 'Intermediate',
      category: 'Bodyweight',
      image: ringDipDemo,
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      instructions: [
        'Support body on bars with arms extended',
        'Lower body by bending elbows',
        'Descend until shoulders below elbows',
        'Press back up to starting position'
      ],
      commonFaults: [
        'Partial range of motion',
        'Leaning too far forward',
        'Shoulders rolling forward',
        'Using momentum'
      ],
      proTips: [
        'Keep shoulders back and down',
        'Control the descent',
        'Full range of motion',
        'Build strength with negatives'
      ]
    },
    {
      id: 'double-under',
      name: 'The Double-under',
      description: 'Jump rope variation where rope passes under feet twice per jump',
      difficulty: 'Intermediate',
      category: 'Bodyweight',
      image: doubleUnderDemo,
      muscleGroups: ['Calves', 'Shoulders', 'Cardiovascular'],
      instructions: [
        'Hold rope handles with relaxed grip',
        'Jump slightly higher than single-unders',
        'Spin rope faster with wrist rotation',
        'Land softly on balls of feet'
      ],
      commonFaults: [
        'Jumping too high',
        'Using arms instead of wrists',
        'Inconsistent timing',
        'Landing on heels'
      ],
      proTips: [
        'Master single-unders first',
        'Keep elbows close to body',
        'Practice wrist rotation',
        'Stay relaxed and rhythmic'
      ]
    },
    {
      id: 'single-under',
      name: 'The Single-under',
      description: 'Basic jump rope where rope passes under feet once per jump',
      difficulty: 'Beginner',
      category: 'Bodyweight',
      image: doubleUnderDemo,
      muscleGroups: ['Calves', 'Shoulders', 'Cardiovascular'],
      instructions: [
        'Hold rope handles at hip level',
        'Jump just high enough for rope to pass under',
        'Land softly on balls of feet',
        'Maintain steady rhythm'
      ],
      commonFaults: [
        'Jumping too high',
        'Landing on heels',
        'Inconsistent rhythm',
        'Arms too wide'
      ],
      proTips: [
        'Minimal jump height needed',
        'Keep elbows close to body',
        'Focus on rhythm over speed',
        'Practice daily for coordination'
      ]
    },
    {
      id: 'pistol-squat',
      name: 'The Single-leg Squat (Pistol)',
      description: 'Single-leg squat requiring strength, balance, and mobility',
      difficulty: 'Advanced',
      category: 'Bodyweight',
      image: pistolSquatDemo,
      muscleGroups: ['Quads', 'Glutes', 'Core'],
      instructions: [
        'Stand on one leg with other leg extended forward',
        'Lower into squat while keeping extended leg straight',
        'Descend until hip crease below knee',
        'Drive through heel to return to standing'
      ],
      commonFaults: [
        'Extended leg touching ground',
        'Falling backward',
        'Partial range of motion',
        'Using momentum to stand'
      ],
      proTips: [
        'Work on ankle mobility first',
        'Use counterbalance to learn',
        'Build strength with box pistols',
        'Practice single-leg balance daily'
      ]
    },
    {
      id: 'push-up',
      name: 'The Push-up',
      description: 'Classic upper body pushing movement - builds chest, shoulders, and triceps',
      difficulty: 'Beginner',
      category: 'Bodyweight',
      image: pullupVariations,
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      instructions: [
        'Start in plank position with hands under shoulders',
        'Lower body as one unit until chest touches floor',
        'Press through hands to return to starting position',
        'Maintain straight line from head to heels'
      ],
      commonFaults: [
        'Sagging hips or piking up',
        'Partial range of motion',
        'Hands too wide or narrow',
        'Head leading movement'
      ],
      proTips: [
        'Engage core throughout movement',
        'Keep body in straight line',
        'Control descent, explosive push',
        'Scale to knees if needed'
      ]
    },
    {
      id: 'strict-pull-up',
      name: 'The Strict Pull-up',
      description: 'Upper body pulling movement - builds back, biceps, and grip strength',
      difficulty: 'Intermediate',
      category: 'Bodyweight',
      image: pullupVariations,
      muscleGroups: ['Lats', 'Rhomboids', 'Biceps'],
      instructions: [
        'Hang from bar with arms fully extended',
        'Pull body up until chin clears bar',
        'Lower with control to full arm extension',
        'Maintain hollow body position throughout'
      ],
      commonFaults: [
        'Kipping or swinging',
        'Partial range of motion',
        'Chin not clearing bar',
        'Losing hollow position'
      ],
      proTips: [
        'Engage lats before pulling',
        'Think about pulling bar to chest',
        'Control negative portion',
        'Build strength with negatives'
      ]
    }
  ],

  Olympic: [
    {
      id: 'clean',
      name: 'The Clean',
      description: 'Olympic lift moving bar from floor to shoulders in one fluid motion',
      difficulty: 'Advanced',
      category: 'Olympic',
      image: thrusterDemo,
      muscleGroups: ['Full Body', 'Power', 'Coordination'],
      instructions: [
        'Start with bar over mid-foot, hands outside legs',
        'Lift bar keeping it close to body',
        'Explosively extend hips when bar reaches mid-thigh',
        'Drop under bar and catch in front rack position'
      ],
      commonFaults: [
        'Bar swinging away from body',
        'Early arm pull',
        'Incomplete hip extension',
        'Poor front rack position'
      ],
      proTips: [
        'Keep bar close throughout pull',
        'Be patient in first pull',
        'Aggressive hip extension',
        'Fast elbows in catch'
      ]
    },
    {
      id: 'clean-and-jerk',
      name: 'The Clean and Jerk',
      description: 'Two-part Olympic lift from floor to overhead',
      difficulty: 'Advanced',
      category: 'Olympic',
      image: thrusterDemo,
      muscleGroups: ['Full Body', 'Power', 'Coordination'],
      instructions: [
        'Clean bar from floor to shoulders',
        'Reset position and prepare for jerk',
        'Dip and drive bar overhead',
        'Split or squat under bar to catch'
      ],
      commonFaults: [
        'Poor clean technique',
        'Inadequate front rack position',
        'Weak jerk drive',
        'Poor overhead position'
      ],
      proTips: [
        'Master clean and jerk separately',
        'Focus on timing and technique',
        'Build overhead strength',
        'Practice footwork patterns'
      ]
    },
    {
      id: 'hang-clean',
      name: 'The Hang Clean',
      description: 'Clean starting from hanging position above knee',
      difficulty: 'Advanced',
      category: 'Olympic',
      image: thrusterDemo,
      muscleGroups: ['Full Body', 'Power', 'Coordination'],
      instructions: [
        'Start with bar at mid-thigh in deadlift position',
        'Explosively extend hips and shrug',
        'Pull under bar as it rises',
        'Catch in front rack position'
      ],
      commonFaults: [
        'Starting position too high or low',
        'Inadequate hip extension',
        'Slow turnover',
        'Poor catch position'
      ],
      proTips: [
        'Focus on explosive hip extension',
        'Keep bar close to body',
        'Fast elbows in turnover',
        'Practice from different hang positions'
      ]
    },
    {
      id: 'power-clean',
      name: 'The Power Clean',
      description: 'Clean caught in partial squat position',
      difficulty: 'Advanced',
      category: 'Olympic',
      image: thrusterDemo,
      muscleGroups: ['Full Body', 'Power', 'Coordination'],
      instructions: [
        'Perform clean but catch in partial squat',
        'Receive bar with hips above parallel',
        'Stand to complete the lift',
        'Focus on explosive hip extension'
      ],
      commonFaults: [
        'Catching too low (full clean)',
        'Poor bar path',
        'Inadequate hip extension',
        'Weak front rack position'
      ],
      proTips: [
        'Emphasize explosive second pull',
        'Practice high pulls',
        'Work on front rack mobility',
        'Focus on speed under bar'
      ]
    },
    {
      id: 'snatch',
      name: 'The Snatch',
      description: 'Olympic lift moving bar from floor to overhead in one motion',
      difficulty: 'Advanced',
      category: 'Olympic',
      image: thrusterDemo,
      muscleGroups: ['Full Body', 'Power', 'Mobility'],
      instructions: [
        'Wide grip on bar, start position like deadlift',
        'Pull bar close to body with straight arms',
        'Explosive hip extension when bar reaches hip',
        'Drop under bar and catch overhead in squat'
      ],
      commonFaults: [
        'Grip too narrow',
        'Bar looping forward',
        'Pressing out overhead',
        'Poor overhead position'
      ],
      proTips: [
        'Work on overhead mobility daily',
        'Practice snatch grip deadlifts',
        'Focus on bar path',
        'Build confidence with hang snatches'
      ]
    },
    {
      id: 'thruster',
      name: 'The Thruster',
      description: 'Full-body movement combining front squat and push press',
      difficulty: 'Advanced',
      category: 'Olympic',
      image: thrusterDemo,
      muscleGroups: ['Quads', 'Glutes', 'Shoulders'],
      instructions: [
        'Start with bar in front rack position',
        'Perform front squat to full depth',
        'Drive up explosively from squat',
        'Use leg drive to press bar overhead'
      ],
      commonFaults: [
        'Pausing between squat and press',
        'Poor front rack position',
        'Incomplete lockout overhead',
        'Forward lean in squat'
      ],
      proTips: [
        'Seamless transition from squat to press',
        'Use leg drive for overhead portion',
        'Keep elbows high in front rack',
        'Breathe at top of movement'
      ]
    }
  ],

  Kettlebell: [
    {
      id: 'kettlebell-swing',
      name: 'The Kettlebell Swing',
      description: 'Hip-hinge movement with kettlebell - builds posterior chain power',
      difficulty: 'Intermediate',
      category: 'Kettlebell',
      image: kettlebellSwingDemo,
      muscleGroups: ['Glutes', 'Hamstrings', 'Core'],
      instructions: [
        'Stand with feet wider than shoulders, kettlebell in front',
        'Hinge at hips to grab kettlebell with both hands',
        'Swing kettlebell between legs, then drive hips forward',
        'Let kettlebell float to chest height, then repeat'
      ],
      commonFaults: [
        'Squatting instead of hinging',
        'Using arms to lift kettlebell',
        'Hyperextending back at top',
        'Kettlebell going too high'
      ],
      proTips: [
        'Power comes from hip drive',
        'Keep arms relaxed and straight',
        'Engage glutes at top',
        'Control the descent'
      ]
    },
    {
      id: 'kettlebell-snatch',
      name: 'The Kettlebell Snatch',
      description: 'Single-arm movement from floor to overhead with kettlebell',
      difficulty: 'Advanced',
      category: 'Kettlebell',
      image: kettlebellSwing,
      muscleGroups: ['Full Body', 'Power', 'Coordination'],
      instructions: [
        'Start with kettlebell between feet',
        'Hinge and grab kettlebell with one hand',
        'Swing up explosively and punch through at top',
        'Catch kettlebell overhead with locked arm'
      ],
      commonFaults: [
        'Banging kettlebell on forearm',
        'Poor hip drive',
        'Inadequate punch through',
        'Unstable overhead position'
      ],
      proTips: [
        'Master kettlebell swing first',
        'Focus on smooth arc motion',
        'Practice punch through technique',
        'Build overhead stability'
      ]
    },
    {
      id: 'turkish-get-up',
      name: 'The Dumbbell Turkish Get-up',
      description: 'Complex movement from lying to standing with weight overhead',
      difficulty: 'Advanced',
      category: 'Kettlebell',
      image: kettlebellSwing,
      muscleGroups: ['Shoulders', 'Core', 'Hips'],
      instructions: [
        'Lie on back with weight in right hand, arm extended',
        'Roll to elbow, then to hand, keeping weight overhead',
        'Bridge hips up and sweep leg under',
        'Stand up while maintaining weight overhead'
      ],
      commonFaults: [
        'Looking away from weight',
        'Rushing through positions',
        'Poor shoulder stability',
        'Losing balance'
      ],
      proTips: [
        'Keep eyes on weight throughout',
        'Master each position separately',
        'Build shoulder stability first',
        'Practice both sides equally'
      ]
    }
  ],

  Gymnastics: [
    {
      id: 'chest-to-bar-pullup',
      name: 'The Chest-to-bar Pull-up',
      description: 'Pull-up with chest touching the bar - higher standard',
      difficulty: 'Advanced',
      category: 'Gymnastics',
      image: pullupVariations,
      muscleGroups: ['Lats', 'Rhomboids', 'Biceps'],
      instructions: [
        'Hang from bar with hollow position',
        'Pull aggressively bringing chest to bar',
        'Touch chest to bar at sternum level',
        'Lower with control to full extension'
      ],
      commonFaults: [
        'Not reaching chest to bar',
        'Using excessive kip',
        'Poor body position',
        'Inconsistent contact point'
      ],
      proTips: [
        'Build strict pull-up strength first',
        'Focus on aggressive pull',
        'Maintain hollow position',
        'Practice consistent contact point'
      ]
    },
    {
      id: 'handstand',
      name: 'The Handstand',
      description: 'Inverted balance position on hands',
      difficulty: 'Advanced',
      category: 'Gymnastics',
      image: pullupVariations,
      muscleGroups: ['Shoulders', 'Core', 'Wrists'],
      instructions: [
        'Place hands on floor shoulder-width apart',
        'Kick up to inverted position',
        'Maintain straight line from hands to feet',
        'Balance using finger pressure and shoulder adjustments'
      ],
      commonFaults: [
        'Arching back excessively',
        'Poor hand position',
        'Inadequate shoulder strength',
        'Looking around instead of at hands'
      ],
      proTips: [
        'Build shoulder strength first',
        'Practice hollow holds',
        'Work on wrist mobility',
        'Use wall for support initially'
      ]
    },
    {
      id: 'handstand-push-up',
      name: 'The Handstand Push-up',
      description: 'Inverted pressing movement requiring strength and balance',
      difficulty: 'Advanced',
      category: 'Gymnastics',
      image: pullupVariations,
      muscleGroups: ['Shoulders', 'Triceps', 'Core'],
      instructions: [
        'Kick up to handstand against wall',
        'Lower head to floor with control',
        'Press back to full arm extension',
        'Maintain hollow body position throughout'
      ],
      commonFaults: [
        'Arching back excessively',
        'Partial range of motion',
        'Poor hand position',
        'Losing balance'
      ],
      proTips: [
        'Build shoulder strength first',
        'Practice hollow holds',
        'Use abmat for depth',
        'Master wall walks first'
      ]
    },
    {
      id: 'handstand-walk',
      name: 'The Handstand Walk',
      description: 'Walking on hands - ultimate test of balance and strength',
      difficulty: 'Advanced',
      category: 'Gymnastics',
      image: pullupVariations,
      muscleGroups: ['Shoulders', 'Triceps', 'Core'],
      instructions: [
        'Kick up to handstand with hollow position',
        'Shift weight to one hand while stepping with other',
        'Take small steps, maintaining balance',
        'Keep shoulders over hands throughout'
      ],
      commonFaults: [
        'Taking steps too large',
        'Arching back',
        'Looking around instead of at hands',
        'Poor shoulder position'
      ],
      proTips: [
        'Master freestanding handstand first',
        'Practice weight shifts',
        'Keep steps small and controlled',
        'Maintain hollow body position'
      ]
    },
    {
      id: 'kipping-pull-up',
      name: 'The Kipping Pull-up',
      description: 'Dynamic pull-up using hip drive for efficiency',
      difficulty: 'Advanced',
      category: 'Gymnastics',
      image: pullupVariations,
      muscleGroups: ['Lats', 'Biceps', 'Core'],
      instructions: [
        'Hang from bar in hollow position',
        'Initiate with lat pull and hip drive',
        'Create arch and hollow positions',
        'Use momentum to pull chin over bar'
      ],
      commonFaults: [
        'Poor timing of kip',
        'Inadequate lat engagement',
        'Losing rhythm',
        'Excessive leg swing'
      ],
      proTips: [
        'Master strict pull-ups first',
        'Practice hollow and arch positions',
        'Focus on lat engagement',
        'Build rhythm gradually'
      ]
    },
    {
      id: 'l-sit',
      name: 'The L-sit',
      description: 'Holding L-position on parallettes or rings',
      difficulty: 'Advanced',
      category: 'Gymnastics',
      image: pullupVariations,
      muscleGroups: ['Core', 'Shoulders', 'Triceps'],
      instructions: [
        'Support body on parallettes with straight arms',
        'Lift legs to horizontal position',
        'Hold position with engaged core',
        'Maintain straight legs and pointed toes'
      ],
      commonFaults: [
        'Bent legs',
        'Shoulders rolling forward',
        'Sagging in middle',
        'Holding breath'
      ],
      proTips: [
        'Build core strength with hollow holds',
        'Practice tucked L-sits first',
        'Keep shoulders active',
        'Breathe normally during hold'
      ]
    },
    {
      id: 'muscle-up',
      name: 'The Muscle-up',
      description: 'Transition from pull-up to dip - ultimate upper body movement',
      difficulty: 'Advanced',
      category: 'Gymnastics',
      image: pullupVariations,
      muscleGroups: ['Lats', 'Biceps', 'Triceps'],
      instructions: [
        'Start hanging from rings or bar',
        'Pull high with aggressive lean forward',
        'Transition by rotating around rings/bar',
        'Press to full arm extension'
      ],
      commonFaults: [
        'Not pulling high enough',
        'Poor transition technique',
        'Weak dip strength',
        'Chicken winging'
      ],
      proTips: [
        'Master strict pull-ups and dips first',
        'Practice high pull-ups',
        'Work on transition separately',
        'Build false grip strength'
      ]
    },
    {
      id: 'rope-climb',
      name: 'The Rope Climb',
      description: 'Climbing rope using legs and arms - functional pulling strength',
      difficulty: 'Intermediate',
      category: 'Gymnastics',
      image: pullupVariations,
      muscleGroups: ['Lats', 'Biceps', 'Forearms'],
      instructions: [
        'Jump up and grab rope with both hands',
        'Wrap rope around leg and clamp with feet',
        'Pull with arms while pushing with legs',
        'Reach hand over hand to climb up'
      ],
      commonFaults: [
        'Not using legs effectively',
        'Poor foot clamp',
        'Sliding down rope',
        'Inefficient hand placement'
      ],
      proTips: [
        'Master the foot clamp first',
        'Use legs to take weight off arms',
        'Practice J-hook foot position',
        'Descend with control'
      ]
    },
    {
      id: 'toes-to-bar',
      name: 'The Toes-to-bar',
      description: 'Hanging from bar and bringing toes to touch bar',
      difficulty: 'Intermediate',
      category: 'Gymnastics',
      image: pullupVariations,
      muscleGroups: ['Abs', 'Hip Flexors', 'Lats'],
      instructions: [
        'Hang from bar with hollow position',
        'Initiate with lat pull and hip flexion',
        'Bring toes up to touch bar',
        'Lower with control maintaining hollow'
      ],
      commonFaults: [
        'Swinging instead of controlled movement',
        'Not touching bar with toes',
        'Poor hollow position',
        'Using only hip flexors'
      ],
      proTips: [
        'Start with knees-to-elbows',
        'Engage lats throughout',
        'Practice hollow rocks',
        'Control the descent'
      ]
    }
  ],

  Strength: [
    {
      id: 'bench-press',
      name: 'The Bench Press',
      description: 'Classic upper body strength movement - builds chest, shoulders, and triceps',
      difficulty: 'Intermediate',
      category: 'Strength',
      image: benchPressDemo,
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      instructions: [
        'Lie on bench with feet flat on floor',
        'Grip bar slightly wider than shoulders',
        'Lower bar to chest with control',
        'Press bar up to full arm extension'
      ],
      commonFaults: [
        'Bouncing bar off chest',
        'Partial range of motion',
        'Poor bar path',
        'Lifting feet off floor'
      ],
      proTips: [
        'Keep shoulder blades retracted',
        'Control the descent',
        'Drive through legs',
        'Maintain arch in back'
      ]
    },
    {
      id: 'good-morning',
      name: 'The Good Morning',
      description: 'Hip hinge movement with barbell on back - builds posterior chain',
      difficulty: 'Intermediate',
      category: 'Strength',
      image: deadliftDemo,
      muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
      instructions: [
        'Position barbell on upper back like back squat',
        'Hinge at hips pushing them back',
        'Lower torso while keeping back straight',
        'Return to standing by driving hips forward'
      ],
      commonFaults: [
        'Rounding the back',
        'Bending knees too much',
        'Going too low',
        'Using too much weight'
      ],
      proTips: [
        'Start with bodyweight or light load',
        'Focus on hip hinge pattern',
        'Keep chest up throughout',
        'Control the movement'
      ]
    },
    {
      id: 'overhead-press',
      name: 'The Shoulder Press',
      description: 'Strict pressing movement from shoulders to overhead',
      difficulty: 'Intermediate',
      category: 'Strength',
      image: bradenPushPressDemo,
      muscleGroups: ['Shoulders', 'Triceps', 'Core'],
      instructions: [
        'Start with bar at shoulder level',
        'Press bar straight up overhead',
        'Lock out arms fully at top',
        'Lower with control to starting position'
      ],
      commonFaults: [
        'Pressing bar forward',
        'Using leg drive (making it push press)',
        'Incomplete lockout',
        'Arching back excessively'
      ],
      proTips: [
        'Keep bar path straight up',
        'Engage core throughout',
        'Press through to full lockout',
        'Build shoulder mobility'
      ]
    },
    {
      id: 'push-press',
      name: 'The Push Press',
      description: 'Pressing movement using leg drive to assist',
      difficulty: 'Intermediate',
      category: 'Strength',
      image: bradenPushPressDemo,
      muscleGroups: ['Shoulders', 'Triceps', 'Legs'],
      instructions: [
        'Start with bar at shoulder level',
        'Dip knees slightly, then drive up',
        'Use leg drive to help press bar overhead',
        'Lock out arms at top'
      ],
      commonFaults: [
        'Dipping too deep',
        'Slow transition from dip to drive',
        'Poor timing',
        'Forward bar path'
      ],
      proTips: [
        'Quick, shallow dip',
        'Explosive leg drive',
        'Fast hands to lockout',
        'Practice timing with light weight'
      ]
    },
    {
      id: 'ring-dip',
      name: 'The Ring Dip',
      description: 'Dip performed on gymnastic rings - builds stability and strength',
      difficulty: 'Advanced',
      category: 'Strength',
      image: ringDipDemo,
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      instructions: [
        'Support body on rings with arms extended',
        'Lower body by bending elbows',
        'Descend until shoulders below elbows',
        'Press back up to starting position'
      ],
      commonFaults: [
        'Rings turning out at bottom',
        'Partial range of motion',
        'Kipping or swinging',
        'Poor ring control'
      ],
      proTips: [
        'Turn rings out at top',
        'Control ring movement',
        'Build strength with negatives',
        'Master stationary dips first'
      ]
    },
    {
      id: 'rowing',
      name: 'The Row',
      description: 'Full-body cardiovascular exercise using rowing machine',
      difficulty: 'Beginner',
      category: 'Strength',
      image: rowingDemo,
      muscleGroups: ['Back', 'Legs', 'Cardiovascular'],
      instructions: [
        'Sit on rower with feet strapped in',
        'Start with arms extended, knees bent',
        'Drive with legs, then lean back and pull handle',
        'Reverse the sequence to return'
      ],
      commonFaults: [
        'Arms pulling too early',
        'Poor posture',
        'Rushing the recovery',
        'Inefficient stroke sequence'
      ],
      proTips: [
        'Legs, body, arms on drive',
        'Arms, body, legs on recovery',
        'Maintain strong posture',
        'Focus on stroke rate and power'
      ]
    },
    {
      id: 'sumo-deadlift',
      name: 'The Sumo Deadlift',
      description: 'Wide-stance deadlift variation emphasizing quads and glutes',
      difficulty: 'Intermediate',
      category: 'Strength',
      image: deadliftDemo,
      muscleGroups: ['Quads', 'Glutes', 'Hamstrings'],
      instructions: [
        'Stand with wide stance, toes pointed out',
        'Grip bar with hands inside legs',
        'Keep chest up and back straight',
        'Drive through heels to stand up'
      ],
      commonFaults: [
        'Stance too narrow or wide',
        'Knees caving inward',
        'Rounding back',
        'Bar drifting away from body'
      ],
      proTips: [
        'Find your optimal stance width',
        'Keep knees tracking over toes',
        'Engage lats to keep bar close',
        'Focus on driving floor away'
      ]
    },
    {
      id: 'wall-ball-shot',
      name: 'The Wall-ball Shot',
      description: 'Functional movement combining squat and overhead throw',
      difficulty: 'Intermediate',
      category: 'Strength',
      image: wallBallShotDemo,
      muscleGroups: ['Full Body', 'Legs', 'Shoulders'],
      instructions: [
        'Hold medicine ball at chest level',
        'Perform squat to full depth',
        'Drive up explosively and throw ball to target',
        'Catch ball and immediately descend into next squat'
      ],
      commonFaults: [
        'Not hitting target consistently',
        'Partial squat depth',
        'Pausing between reps',
        'Poor ball control'
      ],
      proTips: [
        'Use leg drive for throw',
        'Catch ball softly',
        'Maintain rhythm between reps',
        'Keep core engaged throughout'
      ]
    },
    {
      id: 'walking-lunge',
      name: 'The Walking Lunge',
      description: 'Dynamic lunge moving forward with each rep',
      difficulty: 'Beginner',
      category: 'Strength',
      image: boxJumpDemo,
      muscleGroups: ['Quads', 'Glutes', 'Hamstrings'],
      instructions: [
        'Step forward into lunge position',
        'Lower back knee toward ground',
        'Push off front foot to step forward',
        'Alternate legs with each step'
      ],
      commonFaults: [
        'Step too short or long',
        'Knee tracking inward',
        'Partial range of motion',
        'Leaning forward'
      ],
      proTips: [
        'Take appropriately sized steps',
        'Keep torso upright',
        'Full range of motion',
        'Control the movement'
      ]
    }
  ]
}

// Utility functions
export const getAllMovements = () => {
  const allMovements = []
  Object.values(movementDatabase).forEach(category => {
    allMovements.push(...category)
  })
  return allMovements
}

export const getMovementsByCategory = (category) => {
  if (category === 'All' || category === 'all') {
    return getAllMovements()
  }
  return movementDatabase[category] || []
}

export const searchMovements = (searchTerm) => {
  const allMovements = getAllMovements()
  return allMovements.filter(movement => 
    movement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movement.muscleGroups.some(group => 
      group.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )
}

export const movementCategories = Object.keys(movementDatabase)

export default movementDatabase

