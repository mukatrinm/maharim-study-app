const topicSets = {
  permanent: [
    {
      title: "النسب",
      points: ["الأمهات وإن علون", "البنات وإن نزلن", "الأخوات وبنات الإخوة وبنات الأخوات", "العمات والخالات للشخص ولأصوله"],
      note: "بنات العم والعمة والخال والخالة غير محرمات."
    },
    {
      title: "المصاهرة",
      points: ["زوجة الأب والجد بمجرد العقد", "أم الزوجة وجداتها بمجرد العقد", "الربيبة بشرط الدخول بالأم", "زوجة الابن وإن نزل بمجرد العقد"],
      note: "الفرق الحاسم: أم الزوجة بالعقد، وبنت الزوجة بالدخول."
    },
    {
      title: "الرضاع",
      points: ["يحرم من الرضاع ما يحرم من النسب والمصاهرة", "الرضاع في السنتين", "وصول اللبن إلى جوف الصغير بيقين", "مع وجود مستثنيات لا تقاس على النسب"],
      note: "في القضاء يعمل بالحنفية عند سكوت القانون، وفي الإفتاء يراعى الابتداء والبقاء."
    }
  ],
  temporary: [
    {
      title: "زوجة الغير أو المعتدة",
      points: ["تحرم ما دامت في عصمة غيره", "وتحرم ما دامت في العدة", "يشمل عدة الوفاة والطلاق والنكاح الفاسد ووطء الشبهة"],
      note: "إذا زال السبب وانتهت العدة زال التحريم."
    },
    {
      title: "الجمع بين المحارم",
      points: ["أخت الزوجة", "عمتها أو خالتها", "بنت أخيها أو بنت أختها", "لا يصح الجمع حتى تنقضي عدة الأولى"],
      note: "القاعدة: لو فرضت إحداهما رجلاً لم يجز نكاحها من الأخرى."
    },
    {
      title: "موانع مؤقتة أخرى",
      points: ["المطلقة ثلاثاً حتى تنكح زوجاً غيره", "الخامسة لمن عنده أربع", "غير الكتابية", "الحامل من الزنا لا يواقعها حتى تضع إن لم يكن الحمل منه"],
      note: "هذه ليست مثل النسب: السبب قد يزول فيتغير الحكم."
    }
  ]
};

const rules = [
  {
    title: "العقد على البنات يحرّم الأمهات",
    body: "إذا عقد الرجل على امرأة عقداً صحيحاً حرمت عليه أمها وجداتها فوراً، سواء حصل دخول أم لا.",
    example: "عبد الله تزوج ازدهار: لطيفة أم ازدهار محرمة على عبد الله بمجرد العقد.",
    diagram: { family: "musaharah", label: "عبد الله، ازدهار، لطيفة" }
  },
  {
    title: "الدخول بالأمهات يحرّم البنات",
    body: "بنت الزوجة، وهي الربيبة، لا تحرم بمجرد العقد على أمها. لا تحرم إلا إذا دخل الزوج بالأم.",
    example: "عمر عقد على سعاد ولها بنت تفاحة: إن دخل بسعاد حرمت تفاحة، وإن طلق قبل الدخول لم تحرم.",
    diagram: { family: "musaharah", label: "عمر، سعاد، تفاحة" }
  },
  {
    title: "أصول زوجة الابن وفروعها ليست لأصل الزوج",
    body: "زوجة الابن تحرم على الأب، لكن أم زوجة الابن أو بنتها من غير الابن ليست محرمة على الأب بهذا السبب.",
    example: "تحرم زوجة الابن على والد الابن، لكن أم زوجة الابن لا تحرم على والد الابن.",
    diagram: { family: "musaharah", label: "أصول زوجة الابن وفروعها" }
  },
  {
    title: "يحرم من الرضاع ما يحرم من النسب والمصاهرة",
    body: "الأم بالرضاع، الأخت بالرضاع، زوجة الأب بالرضاع، وأم الزوجة بالرضاع تدخل في التحريم، مع المستثنيات المذكورة.",
    example: "سهام رضعت من ختام، ثم تزوجها عمر: ختام تصبح أم زوجته بالرضاع فتحرم عليه.",
    diagram: { family: "radaa", label: "سهام وختام" }
  },
  {
    title: "لبن الفحل",
    body: "اللبن ينسب للمرضعة وللرجل الذي ثار اللبن بسببه. لذلك قد تثبت المحرمية بسبب الرجل الواحد ولو تعددت المرضعات.",
    example: "إذا كان اللبن بسبب فوزي، فالرضيع يرتبط بفوزي رضاعاً، لا بالمرضعة وحدها.",
    diagram: { family: "radaa", label: "لبن الفحل: فوزي وسامية وخالدية" }
  },
  {
    title: "يحتاط في الأبضاع ما لا يحتاط بغيرها",
    body: "قبل الزواج يفتى بقول الحنفية احتياطاً في مقدار الرضاع. بعد الزواج قد يرشد الزوجان إلى قول الشافعية حفاظاً على الأسرة.",
    example: "الحنفية يثبتون التحريم بقطرة، والشافعية بخمس رضعات متفرقات.",
    diagram: { family: "radaa", label: "مقدار الرضاع والإفتاء" }
  }
];

const mapDetails = {
  permanent: {
    title: "المحرمات على سبيل التأبيد",
    intro: "هذا مسار العلاقات التي لا يصح خطبتها ولا الزواج بها في أي حال: نسب، مصاهرة، ورضاع.",
    detailTitle: "اسأل: هل السبب دائم؟",
    detail: "إن كان السبب قرابة أصلية، أو مصاهرة مؤبدة، أو رضاعاً محرماً، فالحكم لا يزول بزوال ظرف مؤقت."
  },
  temporary: {
    title: "المحرمات على سبيل التأقيت",
    intro: "هذا مسار العلاقات التي يبقى تحريمها ما بقي السبب، فإذا زال السبب زال التحريم.",
    detailTitle: "اسأل: هل السبب قابل للزوال؟",
    detail: "مثل زوجة الغير أو المعتدة، أخت الزوجة بسبب الجمع، المطلقة ثلاثاً، الخامسة، وغير الكتابية."
  }
};

const flashcards = [
  ["ما أصناف المحرمات بالنسب؟", "الأمهات، البنات، فروع الأبوين، العمات والخالات."],
  ["متى تحرم الربيبة؟", "إذا دخل الزوج بأمها دخولاً حقيقياً. أما مجرد العقد فلا يكفي."],
  ["هل بنت العمة محرمة؟", "لا. العمة محرمة، أما بنت العمة فليست من المحرمات بالنسب."],
  ["ما مقدار الرضاع عند الحنفية؟", "لا يشترط مقدار معين، فيثبت التحريم ولو بقطرة."],
  ["ما مقدار الرضاع عند الشافعية؟", "خمس رضعات متفرقات."],
  ["ما معنى التحريم المؤقت؟", "يبقى التحريم ما بقي سببه، فإذا زال السبب زال التحريم."],
  ["ما شرط الرضاع المحرم من حيث الزمن؟", "أن يكون خلال السنتين الأوليين من ولادة الطفل."],
  ["هل الزنا ينشر حرمة المصاهرة في المعتمد قضائياً؟", "عند سكوت القانون يصار للمعتمد عند الحنفية: تثبت حرمة المصاهرة بالزنا."]
];

const quiz = [
  {
    q: "رجل عقد على امرأة ثم طلقها قبل الدخول. ما حكم زواجه من أمها؟",
    a: ["تحرم عليه مؤبداً", "تحرم مؤقتاً حتى تنتهي العدة", "يجوز لأنها لم تدخل عليه"],
    correct: 0,
    why: "أم الزوجة تحرم بمجرد العقد الصحيح، ولا يشترط الدخول."
  },
  {
    q: "رجل عقد على امرأة لها بنت من زوج سابق، ثم طلق الأم قبل الدخول. ما حكم البنت؟",
    a: ["تحرم مؤبداً", "لا تحرم عليه", "تحرم فقط أثناء عدة الأم"],
    correct: 1,
    why: "الربيبة لا تحرم إلا بالدخول بالأم."
  },
  {
    q: "هل يجوز الزواج من بنت الخالة؟",
    a: ["نعم، ليست محرمة بالنسب", "لا، لأنها مثل الخالة", "تحرم إذا كانت الخالة شقيقة"],
    correct: 0,
    why: "الخالة نفسها محرمة، أما بنت الخالة فليست من الأصناف المحرمة بالنسب."
  },
  {
    q: "ما حكم أخت الزوجة وهي في عصمة زوجها؟",
    a: ["تحرم مؤبداً", "تحرم مؤقتاً بسبب الجمع", "لا تحرم أبداً"],
    correct: 1,
    why: "يحرم الجمع بين الأختين. إذا زال سبب الجمع وانتهت العدة زال التحريم."
  },
  {
    q: "أي عبارة أدق في الرضاع؟",
    a: ["كل رضاع بعد السنتين محرم", "يشترط أن يصل اللبن لجوف الصغير خلال السنتين", "لا تثبت الحرمة إلا إذا رضع كل الإخوة"],
    correct: 1,
    why: "من شروط الرضاع المحرم: أن يكون في السنتين وأن يصل اللبن إلى الجوف بيقين."
  },
  {
    q: "عند سكوت القانون عن مقدار الرضاع، ما المعتمد قضائياً؟",
    a: ["قول الحنفية", "قول الشافعية دائماً", "لا يعمل بأي قول"],
    correct: 0,
    why: "حيث سكت القانون يصار إلى المعتمد في مذهب الإمام أبي حنيفة."
  }
];

let activeFamily = "nasab";
let activeExample = 0;
let quizIndex = 0;
let quizScore = 0;
let answered = false;
let flashIndex = 0;

const matrix = document.querySelector("#topic-matrix");
const familySvg = document.querySelector("#family-svg");
const explain = document.querySelector("#person-explain");
const conditionToggle = document.querySelector("#condition-toggle");
const conditionInput = document.querySelector("#condition-input");
const conditionLabel = document.querySelector("#condition-label");
const diagramTitle = document.querySelector("#diagram-title");
const diagramSubtitle = document.querySelector("#diagram-subtitle");
const exampleSelect = document.querySelector("#example-select");

function statusText(status) {
  if (status === "blocked") return "تحريم مؤبد";
  if (status === "temporary") return "تحريم مؤقت";
  if (status === "allowed") return "غير محرمة";
  return "عقدة توضيحية";
}

function renderMatrix(kind = "permanent") {
  matrix.innerHTML = topicSets[kind].map((item) => `
    <article class="topic-card">
      <strong>${item.title}</strong>
      <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
      <p>${item.note}</p>
    </article>
  `).join("");
}

function renderMapTopic(kind = "permanent") {
  const detail = mapDetails[kind];
  document.querySelector("#map-title").textContent = detail.title;
  document.querySelector("#map-intro").textContent = detail.intro;
  document.querySelector("#decision-detail").innerHTML = `<strong>${detail.detailTitle}</strong><p>${detail.detail}</p>`;
  renderMatrix(kind);
}

function showView(view) {
  document.querySelectorAll(".view").forEach((el) => el.classList.remove("active"));
  document.querySelector(`#${view}-view`).classList.add("active");
  document.querySelectorAll(".nav-button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
}

function node(id, label, x, y, status, title, detail) {
  return { id, label, x, y, status, title, detail };
}

function edge(from, to, options = {}) {
  return {
    from,
    to,
    status: options.status || "family",
    label: options.label || "",
    curve: options.curve || 0,
    labelDx: options.labelDx || 0,
    labelDy: options.labelDy || 0
  };
}

function scenario(label, build) {
  return { label, build };
}

function nodeBounds(item) {
  if (item.id === "self") {
    return { x: item.x - 82, y: item.y - 52, width: 164, height: 104 };
  }
  return { x: item.x - 72, y: item.y - 72, width: 144, height: 144 };
}

function rectOverlapArea(a, b) {
  const x = Math.max(0, Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x));
  const y = Math.max(0, Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y));
  return x * y;
}

function labelPlacement(edgeItem, geometry, labelWidth, blockedRects) {
  const dx = geometry.b.x - geometry.a.x;
  const dy = geometry.b.y - geometry.a.y;
  const length = Math.hypot(dx, dy) || 1;
  const along = { x: dx / length, y: dy / length };
  const perpendicular = { x: -dy / length, y: dx / length };
  const base = {
    x: geometry.midX + (edgeItem.labelDx || 0),
    y: geometry.midY + (edgeItem.labelDy || 0)
  };
  const offsets = [
    [0, 0],
    [0, -54],
    [0, 54],
    [78, 0],
    [-78, 0],
    [78, -48],
    [-78, -48],
    [78, 48],
    [-78, 48],
    [0, -94],
    [0, 94],
    [125, 0],
    [-125, 0],
    [125, -64],
    [-125, -64],
    [125, 64],
    [-125, 64],
    [0, -135],
    [0, 135],
    [175, 0],
    [-175, 0],
    [175, -80],
    [-175, -80],
    [175, 80],
    [-175, 80]
  ];
  let best = null;

  for (const [parallel, normal] of offsets) {
    const x = base.x + along.x * parallel + perpendicular.x * normal;
    const y = base.y + along.y * parallel + perpendicular.y * normal;
    const rect = { x: x - labelWidth / 2, y: y - 14, width: labelWidth, height: 28 };
    const overlap = blockedRects.reduce((sum, blocked) => sum + rectOverlapArea(rect, blocked), 0);
    const distance = Math.hypot(x - base.x, y - base.y);
    const score = overlap * 1000 + distance;
    if (!best || score < best.score) {
      best = { x, y, rect, score };
    }
    if (overlap === 0) break;
  }

  return best;
}

const familyScenarios = {
  nasab: [
    scenario("الخريطة العامة للنسب", () => ({
      title: "محرمات النسب",
      subtitle: "الأصول، الفروع، فروع الأبوين، العمات والخالات",
      toggle: null,
      nodes: [
        node("mother", "الأم\nوالجدات", 470, 80, "blocked", "الأمهات وإن علون", "كل أم وجدة من جهة الأب أو الأم محرمة تحريماً مؤبداً."),
        node("aunt", "العمة", 810, 155, "blocked", "العمات", "عمتك وعمة أبيك وأمك وأصولك محرمة."),
        node("sister", "الأخت", 135, 245, "blocked", "فروع الأبوين", "الأخت الشقيقة، لأب، أو لأم محرمة."),
        node("self", "أنت", 470, 300, "neutral", "العقدة المركزية", "ابدأ من الشخص في الوسط ثم اسأل: هل العلاقة من الأصول، الفروع، فروع الأبوين، أو العمات والخالات؟"),
        node("cousin", "بنت العم\nأو الخال", 810, 300, "allowed", "غير محرمة بالنسب", "بنات العم والعمة والخال والخالة لسن من المحرمات بالنسب."),
        node("khala", "الخالة", 810, 445, "blocked", "الخالات", "خالتك وخالة أبيك وأمك وأصولك محرمة."),
        node("niece", "بنت الأخ\nأو الأخت", 135, 475, "blocked", "بنات الإخوة والأخوات", "بنات الإخوة وبنات الأخوات وإن نزلن محرمات."),
        node("daughter", "البنت\nوإن نزلت", 470, 520, "blocked", "البنات وإن نزلن", "البنت، بنت الابن، بنت البنت، وكل فرع نازل محرم.")
      ],
      edges: [
        edge("mother", "self", { label: "أم" }),
        edge("self", "daughter", { label: "بنت" }),
        edge("self", "sister", { label: "أخت" }),
        edge("sister", "niece", { label: "بنت الأخت" }),
        edge("self", "mother", { status: "blocked", label: "أصل محرم", curve: 115, labelDx: -105, labelDy: -12 }),
        edge("self", "daughter", { status: "blocked", label: "فرع محرم", curve: -115, labelDx: -18 }),
        edge("self", "sister", { status: "blocked", label: "أخت محرمة", curve: 80, labelDy: -28 }),
        edge("self", "aunt", { status: "blocked", label: "عمة محرمة", curve: -45, labelDx: 28, labelDy: -16 }),
        edge("self", "khala", { status: "blocked", label: "خالة محرمة", curve: 45, labelDx: 28, labelDy: 16 }),
        edge("self", "cousin", { status: "allowed", label: "يجوز", curve: 0, labelDy: -34 })
      ]
    })),
    scenario("العمات والخالات وبناتهن", () => ({
      title: "تمييز العمات والخالات عن بناتهن",
      subtitle: "الخطأ الشائع: تحريم العمة والخالة لا ينتقل إلى بناتهن",
      toggle: null,
      nodes: [
        node("self", "أنت", 470, 280, "neutral", "محور المثال", "العمة والخالة محرمتان، أما بنات العم والعمة والخال والخالة فغير محرمات بالنسب."),
        node("aunt", "العمة", 250, 150, "blocked", "العمة محرمة", "العمة نفسها من المحرمات بالنسب."),
        node("auntDaughter", "بنت العمة", 250, 410, "allowed", "بنت العمة غير محرمة", "يجوز الزواج منها من جهة النسب، لأنها ليست عمة ولا خالة ولا من الفروع."),
        node("khala", "الخالة", 690, 150, "blocked", "الخالة محرمة", "الخالة نفسها من المحرمات بالنسب."),
        node("khalaDaughter", "بنت الخالة", 690, 410, "allowed", "بنت الخالة غير محرمة", "يجوز الزواج منها من جهة النسب."),
        node("fatherAunt", "عمة الأب", 470, 105, "blocked", "عمة الأصل", "عمة الأب أو الأم، وكذلك عمة الجد، تدخل في العمات المحرمات.")
      ],
      edges: [
        edge("aunt", "auntDaughter", { label: "أم" }),
        edge("khala", "khalaDaughter", { label: "أم" }),
        edge("self", "aunt", { status: "blocked", label: "العمة محرمة", curve: -35 }),
        edge("self", "khala", { status: "blocked", label: "الخالة محرمة", curve: 35 }),
        edge("self", "fatherAunt", { status: "blocked", label: "عمة الأصل", curve: -20 }),
        edge("self", "auntDaughter", { status: "allowed", label: "يجوز", curve: 70 }),
        edge("self", "khalaDaughter", { status: "allowed", label: "يجوز", curve: -70 })
      ]
    })),
    scenario("الأخت الشقيقة ولأب ولأم", () => ({
      title: "أنواع الأخوات في النسب",
      subtitle: "كل أخت محرمة: شقيقة، لأب، أو لأم",
      toggle: null,
      nodes: [
        node("self", "أنت", 470, 290, "neutral", "محور المثال", "فروع الأبوين تشمل الأخوات مطلقاً."),
        node("father", "الأب", 610, 120, "blocked", "الأب محرم", "الأب من الأصول، وهو محرم على المرأة، ونذكره هنا لتوضيح جهة الأخت لأب."),
        node("mother", "الأم", 330, 120, "blocked", "الأم محرمة", "الأم من الأصول، وهي محرمة على الرجل، ونذكرها هنا لتوضيح جهة الأخت لأم."),
        node("full", "أخت\nشقيقة", 470, 120, "blocked", "أخت شقيقة", "من نفس الأب والأم، وهي محرمة."),
        node("paternal", "أخت\nلأب", 710, 330, "blocked", "أخت لأب", "من نفس الأب وأم مختلفة، وهي محرمة."),
        node("maternal", "أخت\nلأم", 230, 330, "blocked", "أخت لأم", "من نفس الأم وأب مختلف، وهي محرمة.")
      ],
      edges: [
        edge("father", "full", { label: "أب" }),
        edge("mother", "full", { label: "أم" }),
        edge("father", "paternal", { label: "أب" }),
        edge("mother", "maternal", { label: "أم" }),
        edge("self", "father", { status: "blocked", label: "أب محرم", curve: -55 }),
        edge("self", "mother", { status: "blocked", label: "أم محرمة", curve: 55 }),
        edge("self", "full", { status: "blocked", label: "أخت محرمة", curve: -30 }),
        edge("self", "paternal", { status: "blocked", label: "أخت لأب", curve: 55 }),
        edge("self", "maternal", { status: "blocked", label: "أخت لأم", curve: -55 })
      ]
    }))
  ],
  musaharah: [
    scenario("الخريطة العامة للمصاهرة", (condition) => ({
      title: "محرمات المصاهرة",
      subtitle: "العقد وحده يكفي في مواضع، والدخول شرط في الربيبة",
      toggle: { label: "حصل الدخول بالأم" },
      nodes: [
        node("self", "عمر", 470, 280, "neutral", "الزوج في المثال", "سنفترض أن عمر عقد على سعاد، ولسعاد بنت من زوج سابق."),
        node("wife", "سعاد\nالزوجة", 470, 155, "neutral", "الزوجة", "العلاقة التي تنشئ أحكام المصاهرة."),
        node("wifeMother", "أم سعاد", 250, 115, "blocked", "أم الزوجة", "تحرم بمجرد العقد الصحيح على سعاد، سواء دخل عمر بها أم لا."),
        node("stepDaughter", "تفاحة\nبنت سعاد", 250, 310, condition ? "blocked" : "allowed", "الربيبة", condition ? "لأن عمر دخل بسعاد، فتحرم عليه بنتها تفاحة تحريماً مؤبداً." : "لأن عمر لم يدخل بسعاد، فلا تحرم عليه تفاحة بمجرد العقد."),
        node("fatherWife", "زوجة الأب", 695, 110, "blocked", "زوجة الأب والجد", "تحرم بمجرد عقد الأب أو الجد عليها، ولو لم يحصل دخول."),
        node("sonWife", "زوجة الابن", 705, 300, "blocked", "زوجة الابن وإن نزل", "تحرم على الأب بمجرد عقد الابن الصحيح."),
        node("sonWifeMother", "أم زوجة\nالابن", 705, 465, "allowed", "ليست محرمة بهذا السبب", "لا تحرم أصول زوجة الابن ولا فروعها على أصل الزوج.")
      ],
      edges: [
        edge("self", "wife", { label: "زواج" }),
        edge("wifeMother", "wife", { label: "أم" }),
        edge("wife", "stepDaughter", { label: "أم" }),
        edge("self", "wifeMother", { status: "blocked", label: "أم الزوجة", curve: -70 }),
        edge("self", "stepDaughter", { status: condition ? "blocked" : "allowed", label: condition ? "ربيبة محرمة" : "يجوز", curve: 70 }),
        edge("self", "fatherWife", { status: "blocked", label: "زوجة الأب", curve: -60 }),
        edge("self", "sonWife", { status: "blocked", label: "زوجة الابن", curve: 60 }),
        edge("self", "sonWifeMother", { status: "allowed", label: "يجوز", curve: -80 })
      ]
    })),
    scenario("عبد الله، ازدهار، لطيفة", () => ({
      title: "مثال: عبد الله وازدهار ولطيفة",
      subtitle: "أم الزوجة محرمة على الزوج، لكنها ليست محرمة على والد الزوج",
      toggle: null,
      nodes: [
        node("father", "أبو\nعبد الله", 470, 95, "neutral", "والد الزوج", "السؤال في المحاضرة: هل يجوز له الزواج من لطيفة؟"),
        node("abdullah", "عبد الله", 470, 285, "neutral", "الزوج", "عبد الله عقد على ازدهار."),
        node("izdihar", "ازدهار\nزوجته", 700, 285, "blocked", "زوجة الابن بالنسبة لأبيه", "ازدهار تحرم على أبي عبد الله لأنها زوجة ابنه."),
        node("latifa", "لطيفة\nأم ازدهار", 700, 95, "blocked", "أم الزوجة لعبد الله", "لطيفة محرمة على عبد الله لأنها أم زوجته، لكنها جائزة لأبي عبد الله.")
      ],
      edges: [
        edge("father", "abdullah", { label: "أب", curve: -20 }),
        edge("latifa", "izdihar", { label: "أم", curve: 20 }),
        edge("abdullah", "izdihar", { label: "زواج" }),
        edge("abdullah", "latifa", { status: "blocked", label: "أم الزوجة", curve: -70 }),
        edge("father", "izdihar", { status: "blocked", label: "زوجة الابن", curve: 80 }),
        edge("father", "latifa", { status: "allowed", label: "يجوز", curve: -30 })
      ]
    })),
    scenario("أصول زوجة الابن وفروعها", () => ({
      title: "مثال: أصول زوجة الابن وفروعها",
      subtitle: "زوجة الابن محرمة على الأب، لكن أمها وبنتها ليستا محرمتين عليه بهذا السبب",
      toggle: null,
      nodes: [
        node("father", "الأب", 470, 290, "neutral", "أصل الزوج", "هو والد الابن في المثال."),
        node("son", "الابن", 470, 120, "neutral", "الفرع", "عقد الابن على امرأة."),
        node("sonWife", "زوجة\nالابن", 250, 290, "blocked", "زوجة الابن", "تحرم على الأب بمجرد عقد الابن الصحيح."),
        node("wifeMother", "أم زوجة\nالابن", 700, 165, "allowed", "أصل زوجة الابن", "لا تحرم أم زوجة الابن على والد الابن بهذا السبب."),
        node("wifeDaughter", "بنت زوجة\nالابن", 700, 415, "allowed", "فرع زوجة الابن", "لا تحرم بنت زوجة الابن من غير الابن على والد الابن بهذا السبب.")
      ],
      edges: [
        edge("father", "son", { label: "أب" }),
        edge("son", "sonWife", { label: "زواج" }),
        edge("wifeMother", "sonWife", { label: "أم" }),
        edge("sonWife", "wifeDaughter", { label: "أم" }),
        edge("father", "sonWife", { status: "blocked", label: "زوجة الابن", curve: -70 }),
        edge("father", "wifeMother", { status: "allowed", label: "يجوز", curve: 50 }),
        edge("father", "wifeDaughter", { status: "allowed", label: "يجوز", curve: -50 })
      ]
    })),
    scenario("عمر، سعاد، تفاحة", (condition) => ({
      title: "مثال: شرط الدخول للربيبة",
      subtitle: "بنت الزوجة لا تحرم إلا بالدخول بأمها",
      toggle: { label: "دخل عمر بسعاد" },
      nodes: [
        node("fatherOmar", "أبو عمر", 470, 90, "neutral", "والد عمر", "لا تصبح تفاحة بنت ابن له."),
        node("omar", "عمر", 470, 270, "neutral", "الزوج", "عمر تزوج سعاد، ولسعاد بنت اسمها تفاحة من زوج سابق."),
        node("suad", "سعاد\nالأم", 700, 270, "neutral", "الزوجة والأم", "هي الأم التي يشترط الدخول بها لتحريم بنتها."),
        node("tuffaha", "تفاحة\nبنت سعاد", 700, 450, condition ? "blocked" : "allowed", "الربيبة", condition ? "بعد الدخول بسعاد، تفاحة محرمة على عمر مؤبداً، لكنها ليست بنت ابن لأبي عمر." : "إذا طلق عمر سعاد قبل الدخول، لا تحرم عليه تفاحة.")
      ],
      edges: [
        edge("fatherOmar", "omar", { label: "أب" }),
        edge("omar", "suad", { label: "زواج" }),
        edge("suad", "tuffaha", { label: "أم" }),
        edge("omar", "tuffaha", { status: condition ? "blocked" : "allowed", label: condition ? "ربيبة محرمة" : "يجوز", curve: -70 }),
        edge("fatherOmar", "tuffaha", { status: "allowed", label: "يجوز للأب", curve: 70 })
      ]
    })),
    scenario("مريم: البنت اللاحقة", () => ({
      title: "مثال: البنت اللاحقة بعد الطلاق",
      subtitle: "البنت التي وُلدت بعد زوال الزوجية ليست ربيبة لذلك الزوج",
      toggle: null,
      nodes: [
        node("omar", "عمر", 470, 270, "neutral", "الزوج السابق", "عمر طلق سعاد."),
        node("suadPast", "سعاد\nكانت زوجته", 470, 110, "neutral", "الزوجة السابقة", "بعد الطلاق تزوجت رجلاً آخر."),
        node("newHusband", "زوج آخر", 230, 270, "neutral", "الزوج اللاحق", "مريم ولدت من علاقة سعاد بالزوج الآخر بعد طلاق عمر."),
        node("mariam", "مريم", 470, 450, "allowed", "ليست ربيبة لعمر", "مريم غير محرمة على عمر لأنها ليست بنت زوجته حال زوجيتها معه."),
        node("rule", "وقت\nالزوجية", 710, 270, "neutral", "نقطة الفهم", "العبرة هنا أن البنت لم تكن بنتاً لزوجته أثناء قيام الزوجية معه.")
      ],
      edges: [
        edge("omar", "suadPast", { label: "زواج سابق" }),
        edge("suadPast", "newHusband", { label: "زواج لاحق" }),
        edge("suadPast", "mariam", { label: "أم" }),
        edge("newHusband", "mariam", { label: "أب" }),
        edge("omar", "mariam", { status: "allowed", label: "ليست ربيبة", curve: 70 }),
        edge("rule", "mariam", { label: "بعد الطلاق" })
      ]
    })),
    scenario("العقد الفاسد والدخول", (condition) => ({
      title: "مسألة: النكاح غير الصحيح",
      subtitle: "العقد الفاسد بعد الدخول ينشر الحرمة، وقبل الدخول لا ينشرها",
      toggle: { label: "حصل الدخول" },
      nodes: [
        node("branch", "الفرع", 470, 130, "neutral", "الفرع", "تزوج الفرع بعقد فاسد ثم فارق."),
        node("woman", "المرأة", 470, 290, condition ? "blocked" : "allowed", "أثر العقد الفاسد", condition ? "العقد الفاسد بعد الدخول ينشر حرمة المصاهرة." : "إذا فارقها قبل الدخول، جاز للأصل أن يتزوجها."),
        node("origin", "الأصل", 470, 455, "neutral", "الأصل", "الأصل هو الأب أو الجد ونحوه."),
        node("rule", condition ? "تنشر\nالحرمة" : "لا تنشر\nالحرمة", 720, 290, condition ? "blocked" : "allowed", "قاعدة المسألة", condition ? "بعد الدخول تثبت حرمة المصاهرة." : "قبل الدخول لا تثبت حرمة المصاهرة ولا التوارث.")
      ],
      edges: [
        edge("branch", "woman", { label: "عقد فاسد" }),
        edge("origin", "woman", { status: condition ? "blocked" : "allowed", label: condition ? "تحرم" : "يجوز", curve: 60 }),
        edge("woman", "rule", { status: condition ? "blocked" : "allowed", label: condition ? "بعد دخول" : "قبل دخول" })
      ]
    })),
    scenario("المصاهرة بالزنا", (condition) => ({
      title: "مسألة: هل الزنا يثبت حرمة المصاهرة؟",
      subtitle: "بدّل بين المعتمد الحنفي والعمل بالقول الآخر للمقارنة",
      toggle: { label: "المعتمد الحنفي / قضائياً" },
      nodes: [
        node("man", "الرجل", 470, 290, "neutral", "محور المسألة", "إذا زنى رجل بامرأة، فهل تحرم عليه أصولها وفروعها؟"),
        node("woman", "المرأة", 470, 120, "neutral", "المزني بها", "محل الخلاف الفقهي."),
        node("mother", "أمها", 250, 120, condition ? "blocked" : "allowed", "أصلها", condition ? "عند الحنفية تثبت حرمة المصاهرة بالزنا، فتحرم أمها." : "عند الشافعية والمالكية لا تثبت حرمة المصاهرة بالزنا."),
        node("daughter", "بنتها", 250, 440, condition ? "blocked" : "allowed", "فرعها", condition ? "عند الحنفية تحرم فروعها كذلك." : "في القول الآخر لا تحرم بنتها بسبب الزنا."),
        node("son", "ابن الرجل\nأو أبوه", 700, 290, condition ? "blocked" : "allowed", "أصوله وفروعه", condition ? "عند الحنفية تحرم المزني بها على أصوله وفروعه." : "في القول الآخر لا تنتشر هذه الحرمة.")
      ],
      edges: [
        edge("man", "woman", { label: "زنا" }),
        edge("mother", "woman", { label: "أم" }),
        edge("woman", "daughter", { label: "أم" }),
        edge("man", "mother", { status: condition ? "blocked" : "allowed", label: condition ? "تحرم" : "لا تحرم", curve: -60 }),
        edge("man", "daughter", { status: condition ? "blocked" : "allowed", label: condition ? "تحرم" : "لا تحرم", curve: 60 }),
        edge("man", "son", { status: condition ? "blocked" : "allowed", label: condition ? "ينتشر" : "لا ينتشر" })
      ]
    }))
  ],
  radaa: [
    scenario("الخريطة العامة للرضاع", (condition) => ({
      title: "محرمات الرضاع",
      subtitle: "يحرم من الرضاع ما يحرم من النسب والمصاهرة إلا ما استثني",
      toggle: { label: "اللبن بسبب الزوج" },
      nodes: [
        node("self", "عمر", 470, 280, "neutral", "الرضيع", "التحريم هنا لا ينظر إلى الدم، بل إلى الرضاع المستوفي للشروط."),
        node("milkMother", "المرضعة", 470, 110, "blocked", "الأم بالرضاع", "المرأة التي أرضعت الطفل تصير أماً له بالرضاع."),
        node("milkFather", "زوج المرضعة", 250, 110, condition ? "blocked" : "allowed", "الأب بالرضاع", condition ? "إذا كان اللبن بسببه صار أباً بالرضاع." : "إذا لم يكن اللبن بسببه، لا يصير أباً بالرضاع بمجرد كونه زوج المرضعة."),
        node("milkSibling", "من رضع\nمنها", 250, 310, "blocked", "الأخوة بالرضاع", "كل من اجتمع على ثدي واحد يحرم بعضهم على بعض."),
        node("otherWife", "زوجة الأب\nبالرضاع", 705, 130, condition ? "blocked" : "allowed", "مصاهرة الرضاع", condition ? "إذا ثبت الأب بالرضاع، حرمت زوجته الأخرى كزوجة الأب." : "إذا لم يثبت الأب بالرضاع، فلا تثبت زوجة الأب بالرضاع من جهته."),
        node("fahlMilk", "رضيع من\nلبن الفحل", 705, 335, condition ? "blocked" : "allowed", "لبن الفحل", condition ? "اللبن ينسب للرجل الذي ثار اللبن بسببه، فتثبت المحرمية عبره." : "إذا لم ينسب اللبن للرجل، لا تثبت هذه الصلة من جهة لبن الفحل."),
        node("exceptions", "المستثنيات", 470, 470, "allowed", "لا تقاس كلها على النسب", "مثل أم الأخ من الرضاع، وأخت الابن من الرضاع، وأخت الأخ من الرضاع في الصور المذكورة.")
      ],
      edges: [
        edge("milkMother", "self", { label: "رضاع" }),
        edge("milkMother", "milkFather", { label: "سبب اللبن" }),
        edge("milkMother", "milkSibling", { label: "رضاع" }),
        edge("milkFather", "otherWife", { label: "زواج" }),
        edge("milkFather", "fahlMilk", { label: "لبن الفحل" }),
        edge("self", "milkMother", { status: "blocked", label: "أم رضاع", curve: 65 }),
        edge("self", "milkFather", { status: condition ? "blocked" : "allowed", label: condition ? "أب رضاع" : "ليس أباً", curve: -70 }),
        edge("self", "milkSibling", { status: "blocked", label: "أخوة رضاع", curve: 60 }),
        edge("self", "otherWife", { status: condition ? "blocked" : "allowed", label: condition ? "زوجة الأب" : "لا تثبت", curve: -60 }),
        edge("self", "fahlMilk", { status: condition ? "blocked" : "allowed", label: condition ? "يثبت" : "لا يثبت", curve: 60 }),
        edge("self", "exceptions", { status: "allowed", label: "مستثنى", curve: -50 })
      ]
    })),
    scenario("عمر ومحمود وبنات المرضعة", () => ({
      title: "مثال: أخوه ليس أخاً بالرضاع",
      subtitle: "الرضاع يثبت لمن رضع، لا لكل إخوته من النسب",
      toggle: null,
      nodes: [
        node("nurse", "المرضعة", 470, 95, "blocked", "أم عمر بالرضاع", "تصير أماً لعمر بالرضاع."),
        node("girls", "بنات\nالمرضعة", 250, 285, "blocked", "أخوات عمر بالرضاع", "هن أخوات لعمر بالرضاع لأنه رضع من أمهن، ولسن أخوات محمود بالرضاع."),
        node("omar", "عمر", 470, 455, "neutral", "الرضيع", "عمر رضع من امرأة لها بنات من نسبها."),
        node("mahmoud", "محمود\nأخو عمر", 700, 455, "neutral", "أخ عمر نسباً", "محمود لم يرضع من هذه المرأة، فيجوز له الزواج من بناتها من جهة الرضاع.")
      ],
      edges: [
        edge("nurse", "girls", { label: "أم" }),
        edge("nurse", "omar", { label: "رضاع" }),
        edge("omar", "mahmoud", { label: "أخ نسباً" }),
        edge("omar", "girls", { status: "blocked", label: "أخوات رضاعاً", curve: -80 }),
        edge("mahmoud", "girls", { status: "allowed", label: "يجوز", curve: 80 })
      ]
    })),
    scenario("خالد، سعاد، سهام", () => ({
      title: "مثال: زوجة الأب بالرضاع",
      subtitle: "إذا صار خالد أباً لعمر بالرضاع، حرمت زوجته الأخرى",
      toggle: null,
      nodes: [
        node("omar", "عمر", 470, 450, "neutral", "الرضيع", "عمر رضع من سعاد."),
        node("suad", "سعاد", 250, 250, "blocked", "الأم بالرضاع", "سعاد صارت أم عمر بالرضاع."),
        node("khaled", "خالد", 470, 250, "blocked", "الأب بالرضاع", "بسبب اللبن، خالد صار أباً لعمر بالرضاع."),
        node("siham", "سهام", 700, 250, "blocked", "زوجة الأب بالرضاع", "سهام زوجة أخرى لخالد، فتصير زوجة أب عمر بالرضاع وتحرم عليه."),
        node("rule", "مصاهرة\nبالرضاع", 470, 90, "neutral", "قاعدة المثال", "يحرم من الرضاع ما يحرم من المصاهرة.")
      ],
      edges: [
        edge("suad", "omar", { label: "رضاع" }),
        edge("suad", "khaled", { label: "سبب اللبن" }),
        edge("khaled", "siham", { label: "زواج" }),
        edge("omar", "suad", { status: "blocked", label: "أم رضاع", curve: -50 }),
        edge("omar", "khaled", { status: "blocked", label: "أب رضاع", curve: 50 }),
        edge("omar", "siham", { status: "blocked", label: "زوجة الأب", curve: -80 }),
        edge("rule", "khaled", { label: "مصاهرة" })
      ]
    })),
    scenario("سهام وختام", () => ({
      title: "مثال: أم الزوجة بالرضاع",
      subtitle: "من أرضعت الزوجة وهي صغيرة تصير أم زوجة بالرضاع",
      toggle: null,
      nodes: [
        node("omar", "عمر", 470, 320, "neutral", "الزوج", "عمر تزوج سهام."),
        node("siham", "سهام\nالزوجة", 470, 150, "neutral", "الزوجة", "سهام رضعت صغيرة من ختام."),
        node("khitam", "ختام", 250, 150, "blocked", "أم الزوجة بالرضاع", "ختام تصبح أم زوجة عمر بالرضاع، فتحرم عليه مؤبداً."),
        node("rule", "أم الزوجة\nبالرضاع", 700, 150, "blocked", "مصاهرة الرضاع", "أم الزوجة بالرضاع كأم الزوجة بالنسب في التحريم.")
      ],
      edges: [
        edge("omar", "siham", { label: "زواج" }),
        edge("khitam", "siham", { label: "أم رضاع" }),
        edge("omar", "khitam", { status: "blocked", label: "أم الزوجة", curve: -65 }),
        edge("khitam", "rule", { status: "blocked", label: "تحرم" })
      ]
    })),
    scenario("أختي أرضعت بنتاً", () => ({
      title: "مثال: بنت الأخت بالرضاع",
      subtitle: "إذا أرضعت أختك بنتاً، تصير بنت أختك بالرضاع",
      toggle: null,
      nodes: [
        node("self", "أنت", 470, 300, "neutral", "محور المثال", "أختك أرضعت بنتاً."),
        node("sister", "أختك", 470, 115, "blocked", "الأخت", "الأخت محرمة بالنسب، وما أرضعته يأخذ صلة الرضاع."),
        node("girl", "البنت\nالمرتضعة", 250, 300, "blocked", "بنت الأخت بالرضاع", "تصير بنت أختك بالرضاع، وتكون أنت خالها بالرضاع."),
        node("role", "أنت\nخالها بالرضاع", 700, 300, "neutral", "صلة الرضاع", "هذا يوضح بنات الإخوة وبنات الأخوات بالرضاع.")
      ],
      edges: [
        edge("self", "sister", { label: "أخت" }),
        edge("sister", "girl", { label: "رضاع" }),
        edge("self", "girl", { status: "blocked", label: "بنت الأخت", curve: -70 }),
        edge("self", "role", { label: "خال" })
      ]
    })),
    scenario("لبن الفحل: فوزي وسامية وخالدية", () => ({
      title: "مثال: لبن الفحل",
      subtitle: "اللبن ينسب للرجل الواحد ولو تعددت الزوجات المرضعات",
      toggle: null,
      nodes: [
        node("omar", "عمر", 470, 455, "neutral", "عمر", "عمر ابن فوزي من سامية."),
        node("fawzi", "فوزي", 470, 250, "blocked", "الأب وصاحب اللبن", "اللبن الذي أرضعت به خالدية كان سببه فوزي."),
        node("samia", "سامية\nأم عمر", 250, 250, "neutral", "زوجة فوزي", "سامية أم عمر."),
        node("khaldiya", "خالدية", 700, 250, "blocked", "المرضعة", "خالدية أرضعت انتصار بلبن سببه فوزي."),
        node("intisar", "انتصار", 700, 90, "blocked", "أخت فوزي بالرضاع / عمة عمر بالرضاع", "انتصار صارت بنتاً لخالدية وفوزي بالرضاع، فتحرم على عمر لأنها عمته بالرضاع."),
        node("rule", "ليست من\nنفس الثدي", 250, 90, "neutral", "النقطة الدقيقة", "مع أنها لم ترضع من سامية، تثبت الصلة عبر فوزي صاحب اللبن.")
      ],
      edges: [
        edge("fawzi", "omar", { label: "أب" }),
        edge("fawzi", "samia", { label: "زواج" }),
        edge("fawzi", "khaldiya", { label: "زواج" }),
        edge("khaldiya", "intisar", { label: "رضاع" }),
        edge("fawzi", "intisar", { label: "لبن الفحل" }),
        edge("omar", "intisar", { status: "blocked", label: "عمة رضاع", curve: 80 }),
        edge("rule", "intisar", { label: "ليست من سامية" })
      ]
    })),
    scenario("لبن الهرمونات", () => ({
      title: "مثال: لبن بلا حمل",
      subtitle: "المرأة تصير أماً بالرضاع، لكن زوجها لا يصير أباً بالرضاع",
      toggle: null,
      nodes: [
        node("child", "الطفل", 470, 455, "neutral", "الرضيع", "رضع من امرأة كان اللبن عندها بسبب هرمونات لا بسبب حمل من زوج."),
        node("woman", "المرأة", 470, 250, "blocked", "أم بالرضاع", "المرأة نفسها تصير أماً بالرضاع."),
        node("husband", "زوجها", 700, 250, "allowed", "ليس أباً بالرضاع", "لأن اللبن لم يكن بسببه، فلا يصير أباً بالرضاع."),
        node("daughter", "بنت\nرضعتها", 250, 250, "blocked", "صلة الرضاع", "الطفل ومن رضع معها من المرأة تثبت بينهم صلة الرضاع بحسب تحقق الشروط."),
        node("rule", "لا لبن\nفحل", 470, 90, "neutral", "قاعدة المثال", "لا تنسب الأبوة بالرضاع للزوج إلا إذا كان اللبن بسببه.")
      ],
      edges: [
        edge("woman", "child", { label: "رضاع" }),
        edge("woman", "husband", { label: "زواج" }),
        edge("woman", "daughter", { label: "رضاع" }),
        edge("child", "woman", { status: "blocked", label: "أم رضاع", curve: 55 }),
        edge("child", "husband", { status: "allowed", label: "ليس أباً", curve: -70 }),
        edge("child", "daughter", { status: "blocked", label: "أخوة رضاع", curve: 60 }),
        edge("rule", "husband", { label: "لا فحل" })
      ]
    })),
    scenario("مقدار الرضاع والإفتاء", () => ({
      title: "مثال: مقدار الرضاع والإفتاء",
      subtitle: "الحنفية ابتداءً للاحتياط، والشافعية بقاءً عند الحاجة لحفظ الأسرة",
      toggle: null,
      nodes: [
        node("case", "واقعة\nرضاع", 470, 285, "neutral", "محور المسألة", "نريد معرفة هل الرضاع يثبت التحريم أم لا."),
        node("hanafi", "حنفية:\nقطرة", 250, 140, "blocked", "قول الحنفية", "لا يشترط مقدار معين، فيثبت التحريم ولو بقطرة واحدة."),
        node("shafii", "شافعية:\nخمس رضعات", 700, 140, "neutral", "قول الشافعية", "يشترط خمس رضعات متفرقات للتحريم."),
        node("before", "قبل الزواج:\nاحتياط", 250, 430, "blocked", "الإفتاء ابتداءً", "قبل الزواج يفتى بقول الحنفية احتياطاً: يحتاط في الأبضاع ما لا يحتاط بغيرها."),
        node("after", "بعد الزواج:\nبقاء", 700, 430, "neutral", "الإرشاد بعد العقد", "إذا اكتشفت المسألة بعد الزواج، يرشد إلى قول الشافعية حفاظاً على الأسرة: يغتفر في البقاء ما لا يغتفر في الابتداء.")
      ],
      edges: [
        edge("case", "hanafi", { status: "blocked", label: "يثبت بقطرة", curve: -35 }),
        edge("case", "shafii", { label: "خمس رضعات", curve: 35 }),
        edge("hanafi", "before", { status: "blocked", label: "ابتداءً" }),
        edge("shafii", "after", { label: "بقاءً" })
      ]
    }))
  ],
  temporary: [
    scenario("الخريطة العامة للتأقيت", () => ({
      title: "المحرمات على سبيل التأقيت",
      subtitle: "التحريم يبقى ما بقي سببه، فإذا زال السبب زال التحريم",
      toggle: null,
      nodes: [
        node("self", "الرجل", 470, 280, "neutral", "طالب الحكم", "ابحث عن سبب مؤقت: عصمة، عدة، جمع، عدد، أو مانع ديني."),
        node("otherWife", "زوجة الغير", 470, 105, "temporary", "زوجة الغير", "تحرم ما دامت في عصمة غيره."),
        node("idda", "المعتدة", 250, 190, "temporary", "المعتدة", "تحرم حتى تنقضي عدتها، سواء من وفاة أو طلاق أو غيره مما ذكر في الكتيب."),
        node("wifeSister", "أخت الزوجة", 230, 380, "temporary", "الجمع بين المحارم", "تحرم ما دامت الزوجة في عصمته أو عدتها."),
        node("triple", "مطلقة ثلاثاً", 705, 190, "temporary", "المطلقة ثلاثاً", "لا تحل للأول حتى تنكح زوجاً غيره زواجاً صحيحاً ويدخل بها ثم تفارقه وتنقضي عدتها."),
        node("fifth", "زوجة خامسة", 725, 380, "temporary", "الخامسة", "تحرم على من عنده أربع زوجات أو معتدات حتى يزول العدد."),
        node("nonScripture", "غير كتابية", 470, 470, "temporary", "غير الكتابية", "كالوثنية أو المجوسية، ولا يزول المنع إلا بزوال سببه.")
      ],
      edges: [
        edge("self", "otherWife", { status: "temporary", label: "حتى تزول العصمة", curve: -40 }),
        edge("self", "idda", { status: "temporary", label: "حتى تنقضي العدة", curve: 50 }),
        edge("self", "wifeSister", { status: "temporary", label: "منع الجمع", curve: -50 }),
        edge("self", "triple", { status: "temporary", label: "حتى تنكح غيره", curve: 50 }),
        edge("self", "fifth", { status: "temporary", label: "تمام العدد", curve: -50 }),
        edge("self", "nonScripture", { status: "temporary", label: "مانع ديني", curve: 45 })
      ]
    })),
    scenario("أخت الزوجة والجمع", () => ({
      title: "مثال: أخت الزوجة",
      subtitle: "الحرمة هنا بسبب الجمع، لا بسبب ذات الأخت",
      toggle: null,
      nodes: [
        node("husband", "الزوج", 470, 290, "neutral", "محور المثال", "لا يجوز له الجمع بين زوجته وأختها."),
        node("wife", "الزوجة", 470, 120, "neutral", "الزوجة القائمة", "ما دامت في عصمته أو عدتها فهي مانعة."),
        node("sister", "أخت الزوجة", 250, 290, "temporary", "تحريم مؤقت", "تحرم ما دامت أختها زوجته أو معتدته."),
        node("after", "بعد الوفاة\nأو الطلاق\nوانقضاء العدة", 700, 290, "allowed", "يزول السبب", "إذا زال سبب الجمع وانتهت العدة، زال التحريم.")
      ],
      edges: [
        edge("husband", "wife", { label: "زواج" }),
        edge("wife", "sister", { label: "أخت" }),
        edge("husband", "sister", { status: "temporary", label: "منع الجمع", curve: -65 }),
        edge("sister", "after", { status: "allowed", label: "بعد العدة" })
      ]
    })),
    scenario("المطلقة ثلاثاً", () => ({
      title: "مثال: المطلقة ثلاثاً",
      subtitle: "لا تعود للأول إلا بعد زوج آخر بشروطه",
      toggle: null,
      nodes: [
        node("first", "الزوج\nالأول", 470, 455, "neutral", "المطلق ثلاثاً", "طلق زوجته ثلاث مرات متفرقات في ثلاثة مجالس."),
        node("woman", "المطلقة\nثلاثاً", 470, 270, "temporary", "محرمة على الأول", "تحرم عليه حتى تتحقق الشروط."),
        node("second", "زوج\nثانٍ", 250, 270, "neutral", "الزوج الثاني", "لا بد من زواج صحيح ودخول حقيقي."),
        node("separation", "وفاة أو طلاق\nثم عدة", 250, 90, "neutral", "زوال السبب", "ثم يموت الثاني أو يطلقها وتنقضي عدتها."),
        node("return", "يمكن الرجوع\nللأول", 700, 270, "allowed", "بعد تحقق الشروط", "بشرط ألا يكون هناك اتفاق مسبق مع الأول.")
      ],
      edges: [
        edge("first", "woman", { status: "temporary", label: "طلقة ثالثة", curve: -45 }),
        edge("woman", "second", { label: "زواج صحيح" }),
        edge("second", "separation", { label: "وفاة/طلاق" }),
        edge("separation", "return", { status: "allowed", label: "بعد العدة" }),
        edge("return", "first", { status: "allowed", label: "يمكن" })
      ]
    })),
    scenario("الزوجة الخامسة", () => ({
      title: "مثال: الزوجة الخامسة",
      subtitle: "من عنده أربع زوجات أو معتدات لا يعقد على خامسة",
      toggle: null,
      nodes: [
        node("man", "الرجل", 470, 280, "neutral", "محور المثال", "عنده أربع زوجات أو معتدات."),
        node("four", "أربع\nزوجات", 470, 105, "neutral", "تمام العدد", "العدد المباح مكتمل."),
        node("fifth", "امرأة\nخامسة", 250, 280, "temporary", "تحرم مؤقتاً", "لا يجوز العقد عليها قبل أن يطلق إحداهن وتنقضي عدتها."),
        node("after", "طلاق واحدة\nوانقضاء عدتها", 700, 280, "allowed", "زوال المانع", "بعد زوال العدد يمكن العقد من هذه الجهة.")
      ],
      edges: [
        edge("man", "four", { label: "في عصمته" }),
        edge("man", "fifth", { status: "temporary", label: "خامسة", curve: -55 }),
        edge("four", "fifth", { label: "تمام العدد" }),
        edge("fifth", "after", { status: "allowed", label: "بعد العدة" })
      ]
    }))
  ]
};

function familyData(type) {
  const list = familyScenarios[type] || familyScenarios.nasab;
  if (activeExample >= list.length) activeExample = 0;
  return list[activeExample].build(conditionInput.checked);
}

function renderExampleOptions() {
  const list = familyScenarios[activeFamily] || familyScenarios.nasab;
  exampleSelect.innerHTML = list.map((item, index) => `<option value="${index}">${item.label}</option>`).join("");
  exampleSelect.value = String(activeExample);
}

function drawFamily() {
  const data = familyData(activeFamily);
  diagramTitle.textContent = data.title;
  diagramSubtitle.textContent = data.subtitle;
  if (data.toggle) {
    conditionToggle.classList.remove("hidden");
    conditionLabel.textContent = data.toggle.label;
  } else {
    conditionToggle.classList.add("hidden");
  }

  const nodesById = Object.fromEntries(data.nodes.map((item) => [item.id, item]));
  const normalizedEdges = data.edges.map((edgeDef) => (
    Array.isArray(edgeDef)
      ? edge(edgeDef[0], edgeDef[1], edgeDef[2] || {})
      : edgeDef
  ));
  const edgeGeometry = normalizedEdges.map((item) => {
    const a = nodesById[item.from];
    const b = nodesById[item.to];
    return {
      a,
      b,
      x: (a.x + b.x) / 2 + (item.curve || 0),
      y: (a.y + b.y) / 2,
      midX: (a.x + b.x) / 2 + (item.curve || 0),
      midY: (a.y + b.y) / 2
    };
  });
  const nodeRects = data.nodes.map(nodeBounds);
  const placedLabels = [];
  const labelData = normalizedEdges.map((item, index) => {
    const status = item.status || "family";
    const labelText = status === "family" ? "" : item.label;
    if (!labelText) return null;
    const labelWidth = Math.min(150, Math.max(84, labelText.length * 9 + 28));
    const placement = labelPlacement(item, edgeGeometry[index], labelWidth, [...nodeRects, ...placedLabels]);
    placedLabels.push(placement.rect);
    return { text: labelText, width: labelWidth, x: placement.x, y: placement.y, rect: placement.rect };
  });
  const boundsPoints = [
    ...data.nodes.map((item) => ({ x: item.x, y: item.y })),
    ...edgeGeometry.map((item) => ({ x: item.midX, y: item.midY })),
    ...placedLabels.flatMap((item) => [
      { x: item.x, y: item.y },
      { x: item.x + item.width, y: item.y + item.height }
    ])
  ];
  const minX = Math.min(...boundsPoints.map((item) => item.x)) - 100;
  const maxX = Math.max(...boundsPoints.map((item) => item.x)) + 100;
  const minY = Math.min(...boundsPoints.map((item) => item.y)) - 95;
  const maxY = Math.max(...boundsPoints.map((item) => item.y)) + 95;
  familySvg.setAttribute("viewBox", `${minX} ${minY} ${maxX - minX} ${maxY - minY}`);

  const edges = normalizedEdges.map((item, index) => {
    const a = nodesById[item.from];
    const b = nodesById[item.to];
    const status = item.status || "family";
    const { midX, midY } = edgeGeometry[index];
    const d = `M ${a.x} ${a.y} Q ${midX} ${midY}, ${b.x} ${b.y}`;
    const labelInfo = labelData[index];
    const label = labelInfo
      ? `<g class="edge-label ${status}">
          <rect x="${labelInfo.x - labelInfo.width / 2}" y="${labelInfo.y - 14}" width="${labelInfo.width}" height="28" rx="8"></rect>
          <text x="${labelInfo.x}" y="${labelInfo.y + 1}">${labelInfo.text}</text>
        </g>`
      : "";
    return `<path class="edge ${status}" d="${d}" />${label}`;
  }).join("");

  const nodes = data.nodes.map((item) => {
    const text = item.label.split("\n").map((line, index, lines) => {
      const dy = lines.length === 1 ? 0 : (index - (lines.length - 1) / 2) * 20;
      return `<tspan x="${item.x}" y="${item.y + dy}">${line}</tspan>`;
    }).join("");
    const shape = item.id === "self"
      ? `<rect x="${item.x - 64}" y="${item.y - 36}" width="128" height="72" rx="8"></rect>`
      : `<circle cx="${item.x}" cy="${item.y}" r="58"></circle>`;
    return `
      <g class="node ${item.status}" data-node="${item.id}" tabindex="0" role="button" aria-label="${item.label.replace("\n", " ")}">
        ${shape}
        <text>${text}</text>
      </g>
    `;
  }).join("");

  familySvg.innerHTML = `${edges}${nodes}`;
  familySvg.querySelectorAll(".node").forEach((el) => {
    el.addEventListener("click", () => showPerson(nodesById[el.dataset.node]));
    el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") showPerson(nodesById[el.dataset.node]);
    });
  });
  showPerson(data.nodes[0]);
}

function showPerson(item) {
  explain.innerHTML = `
    <p class="mini-title">${item.title}</p>
    <h3>${item.label.replace("\n", " ")}</h3>
    <p><span class="status-pill ${item.status}">${statusText(item.status)}</span></p>
    <p>${item.detail}</p>
  `;
}

function renderRules() {
  document.querySelector("#rules-grid").innerHTML = rules.map((rule, index) => `
    <article class="rule-card">
      <strong>${rule.title}</strong>
      <p>${rule.body}</p>
      <div class="example">${rule.example}</div>
      <button class="ghost-button visualize-button" data-rule-diagram="${index}">اعرض الرسم</button>
    </article>
  `).join("");
  document.querySelectorAll("[data-rule-diagram]").forEach((button) => {
    button.addEventListener("click", () => openRuleDiagram(Number(button.dataset.ruleDiagram)));
  });
}

function openRuleDiagram(index) {
  const target = rules[index].diagram;
  const scenarios = familyScenarios[target.family] || [];
  const scenarioIndex = scenarios.findIndex((item) => item.label === target.label);
  if (scenarioIndex === -1) return;

  showView("lab");
  activeFamily = target.family;
  activeExample = scenarioIndex;
  conditionInput.checked = true;
  document.querySelectorAll(".segment").forEach((segment) => {
    segment.classList.toggle("active", segment.dataset.family === activeFamily);
  });
  renderExampleOptions();
  drawFamily();
  document.querySelector("#lab-view").scrollIntoView({ behavior: "smooth", block: "start" });
}

const caseDefinitions = {
  wifeMother: {
    condition: "العقد صحيح",
    result: (checked) => checked
      ? ["تحرم مؤبداً", "أم الزوجة وجداتها يحرمن بمجرد العقد الصحيح، ولا يشترط الدخول."]
      : ["لا تثبت بهذا الوصف", "في النكاح غير الصحيح قبل الدخول لا تثبت حرمة المصاهرة كما في الكتيب."]
  },
  stepDaughter: {
    condition: "حصل الدخول بالأم",
    result: (checked) => checked
      ? ["تحرم مؤبداً", "هذه ربيبة، والدخول بالأم يحرّم البنات."]
      : ["لا تحرم", "مجرد العقد على الأم لا يحرم بنتها إن لم يحصل دخول."]
  },
  cousin: {
    condition: "هي بنت قريب مباشر",
    result: () => ["غير محرمة بالنسب", "بنات العم والعمة والخال والخالة لسن من المحرمات، بخلاف العمات والخالات أنفسهن."]
  },
  sisterInLaw: {
    condition: "الزوجة ما زالت في العصمة أو العدة",
    result: (checked) => checked
      ? ["تحرم مؤقتاً", "يحرم الجمع بين الأختين، ويزول التحريم بزوال سببه وانقضاء العدة."]
      : ["يجوز من هذه الجهة", "إذا زال سبب الجمع وانتهت العدة فلا تبقى هذه الحرمة المؤقتة."]
  },
  milkSibling: {
    condition: "الرضاع في السنتين ووصل اللبن للجوف",
    result: (checked) => checked
      ? ["تحرم مؤبداً", "الأخوة بالرضاع تثبت إذا تحقق الرضاع المحرم بشروطه."]
      : ["لا تثبت حرمة الرضاع", "إذا اختل شرط الزمن أو وصول اللبن للجوف فلا يثبت التحريم بهذا السبب."]
  }
};

function updateCaseCondition() {
  const selected = document.querySelector("#case-select").value;
  document.querySelector("#case-condition-text").textContent = caseDefinitions[selected].condition;
}

function checkCase() {
  const selected = document.querySelector("#case-select").value;
  const checked = document.querySelector("#case-condition").checked;
  const [status, reason] = caseDefinitions[selected].result(checked);
  document.querySelector("#case-result").innerHTML = `<strong>${status}</strong><br>${reason}`;
}

function renderQuiz() {
  const item = quiz[quizIndex];
  answered = false;
  document.querySelector("#score").textContent = `${quizScore} / ${quiz.length}`;
  document.querySelector("#quiz-card").innerHTML = `
    <p class="mini-title">سؤال ${quizIndex + 1} من ${quiz.length}</p>
    <h3>${item.q}</h3>
    <div class="answers">
      ${item.a.map((answer, index) => `<button class="answer" data-answer="${index}">${answer}</button>`).join("")}
    </div>
    <div class="quiz-footer">
      <p id="quiz-explain">اختر الجواب.</p>
      <button class="primary-button" id="next-question">${quizIndex === quiz.length - 1 ? "أعد الاختبار" : "السؤال التالي"}</button>
    </div>
  `;
  document.querySelector("#next-question").disabled = true;
  document.querySelectorAll(".answer").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(Number(button.dataset.answer)));
  });
  document.querySelector("#next-question").addEventListener("click", nextQuestion);
}

function answerQuiz(choice) {
  if (answered) return;
  answered = true;
  const item = quiz[quizIndex];
  if (choice === item.correct) quizScore += 1;
  document.querySelectorAll(".answer").forEach((button) => {
    const index = Number(button.dataset.answer);
    if (index === item.correct) button.classList.add("correct");
    else if (index === choice) button.classList.add("wrong");
  });
  document.querySelector("#quiz-explain").textContent = item.why;
  document.querySelector("#score").textContent = `${quizScore} / ${quiz.length}`;
  document.querySelector("#next-question").disabled = false;
}

function nextQuestion() {
  if (quizIndex === quiz.length - 1) {
    quizIndex = 0;
    quizScore = 0;
  } else {
    quizIndex += 1;
  }
  renderQuiz();
}

function renderFlashcard(showBack = false) {
  document.querySelector("#flash-front").textContent = flashcards[flashIndex][0];
  document.querySelector("#flash-back").textContent = flashcards[flashIndex][1];
  document.querySelector("#flash-back").classList.toggle("hidden", !showBack);
  document.querySelector("#toggle-flash").textContent = showBack ? "أخف الجواب" : "أظهر الجواب";
}

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

document.querySelectorAll(".decision-node").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".decision-node").forEach((nodeEl) => nodeEl.classList.remove("selected"));
    button.classList.add("selected");
    renderMapTopic(button.dataset.mapTopic);
  });
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((segment) => segment.classList.remove("active"));
    button.classList.add("active");
    activeFamily = button.dataset.family;
    activeExample = 0;
    conditionInput.checked = true;
    renderExampleOptions();
    drawFamily();
  });
});

exampleSelect.addEventListener("change", () => {
  activeExample = Number(exampleSelect.value);
  conditionInput.checked = true;
  drawFamily();
});

conditionInput.addEventListener("change", drawFamily);
document.querySelector("#shuffle-rule").addEventListener("click", () => {
  const grid = document.querySelector("#rules-grid");
  const first = grid.firstElementChild;
  if (first) grid.append(first);
});
document.querySelector("#case-select").addEventListener("change", updateCaseCondition);
document.querySelector("#check-case").addEventListener("click", checkCase);
document.querySelector("#toggle-flash").addEventListener("click", () => {
  const back = document.querySelector("#flash-back");
  renderFlashcard(back.classList.contains("hidden"));
});
document.querySelector("#next-flash").addEventListener("click", () => {
  flashIndex = (flashIndex + 1) % flashcards.length;
  renderFlashcard(false);
});

renderMapTopic("permanent");
renderExampleOptions();
drawFamily();
renderRules();
updateCaseCondition();
renderQuiz();
renderFlashcard(false);
