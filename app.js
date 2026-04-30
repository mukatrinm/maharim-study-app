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

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
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

// ─── Layout & rendering primitives ────────────────────────────────────────────
const NODE_FONT = 15;
const NODE_LINE = 19;
const NODE_PAD_X = 18;
const NODE_PAD_Y = 14;
const NODE_MIN_W = 110;
const NODE_MIN_H = 60;
const LABEL_FONT = 12.5;
const LABEL_PAD_X = 10;
const LABEL_H = 26;

function node(id, label, x, y, status, title, detail, options = {}) {
  return {
    id,
    label,
    x,
    y,
    status,
    title,
    detail,
    gender: options.gender || null,    // "m" | "f" | null
    shape: options.shape || "person",  // "person" | "concept" | "rule"
    badge: options.badge || null       // small overlay text
  };
}

function edge(from, to, options = {}) {
  return {
    from,
    to,
    status: options.status || "family",
    label: options.label || "",
    curve: options.curve || 0,
    labelDx: options.labelDx || 0,
    labelDy: options.labelDy || 0,
    kind: options.kind || (options.status && options.status !== "family" ? "verdict" : "relation")
  };
}

function scenario(label, build) {
  return { label, build };
}

// Genealogical layout: declare nodes by generation rows, plus marriages and
// parent→child links. Returns positioned nodes + structural edges to merge
// into a scenario's edges array. Children are recentered between parents.
function genTree(spec) {
  const rows = spec.rows;
  const marriages = spec.marriages || [];
  const parents = spec.parents || [];
  const ROW_H = spec.rowHeight || 190;
  const COL_W = spec.colWidth || 230;
  const CENTER_X = spec.centerX || 470;
  const TOP_Y = spec.topY || 110;

  const positioned = [];
  const byId = {};
  rows.forEach((row, gen) => {
    const total = (row.length - 1) * COL_W;
    const startX = CENTER_X - total / 2;
    row.forEach((nodeSpec, col) => {
      const x = startX + col * COL_W;
      const y = TOP_Y + gen * ROW_H;
      const placed = { ...nodeSpec, x, y };
      positioned.push(placed);
      byId[nodeSpec.id] = placed;
    });
  });

  // Recenter each child between its parents (two passes for stability)
  for (let pass = 0; pass < 2; pass++) {
    parents.forEach(({ id, parents: parentIds }) => {
      const xs = parentIds.map((pid) => byId[pid]?.x).filter((x) => x !== undefined);
      if (xs.length) {
        const avg = xs.reduce((a, b) => a + b, 0) / xs.length;
        if (byId[id]) byId[id].x = avg;
      }
    });
  }

  // Synthesise structural edges
  const extraEdges = [];
  marriages.forEach((m) => {
    const [a, b, opts = {}] = Array.isArray(m) ? m : [m.from, m.to, m];
    extraEdges.push(edge(a, b, { ...opts, kind: "marriage" }));
  });
  parents.forEach(({ id, parents: parentIds, marriage }) => {
    if (marriage && parentIds.length === 2) {
      // Render a single child link from the marriage anchor by emitting edges from each parent
      // (the renderer will draw both as parent-style; visually they meet at the child's top).
      parentIds.forEach((pid) => extraEdges.push(edge(pid, id, { kind: "parent" })));
    } else {
      parentIds.forEach((pid) => extraEdges.push(edge(pid, id, { kind: "parent" })));
    }
  });

  return { nodes: positioned, extraEdges };
}

// approximate char width for Arabic at NODE_FONT — empirically tuned
function measureText(text, fontSize = NODE_FONT) {
  const lines = String(text).split("\n");
  const widest = lines.reduce((max, line) => Math.max(max, line.length), 0);
  return {
    w: widest * fontSize * 0.62,
    h: lines.length * fontSize * 1.32,
    lines: lines.length
  };
}

function nodeSize(item) {
  const m = measureText(item.label);
  const isCenter = item.id === "self" || item.shape === "rule";
  const padX = NODE_PAD_X + (item.gender ? 14 : 0);
  return {
    w: Math.max(isCenter ? NODE_MIN_W + 16 : NODE_MIN_W, m.w + padX * 2),
    h: Math.max(NODE_MIN_H, m.h + NODE_PAD_Y * 2)
  };
}

function nodeBounds(item) {
  const s = nodeSize(item);
  return { x: item.x - s.w / 2, y: item.y - s.h / 2, w: s.w, h: s.h };
}

function rectOverlap(a, b) {
  const x = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const y = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  return x * y;
}

function pointInRect(px, py, r, pad = 0) {
  return px >= r.x - pad && px <= r.x + r.w + pad && py >= r.y - pad && py <= r.y + r.h + pad;
}

// Auto-route edge: if the straight line A→B intersects any non-endpoint node bbox,
// shift the control point perpendicular to clear it.
function edgeControlPoint(a, b, manualCurve, nodeRects, endpointIds) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const perp = { x: -dy / len, y: dx / len };
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;
  if (manualCurve) {
    return { x: midX + perp.x * manualCurve, y: midY + perp.y * manualCurve };
  }
  // sample along the line; if any sample sits inside a non-endpoint node, shift
  const samples = 14;
  let blockedSide = 0;
  for (let i = 1; i < samples; i++) {
    const t = i / samples;
    const px = a.x + dx * t;
    const py = a.y + dy * t;
    for (const r of nodeRects) {
      if (endpointIds.has(r.id)) continue;
      if (pointInRect(px, py, r, 4)) {
        // signed perp distance from line midpoint to rect center → push to opposite side
        const cx = r.x + r.w / 2;
        const cy = r.y + r.h / 2;
        const sign = Math.sign(perp.x * (cx - midX) + perp.y * (cy - midY)) || 1;
        blockedSide -= sign;
      }
    }
  }
  if (blockedSide !== 0) {
    const offset = Math.min(140, 60 + Math.abs(blockedSide) * 10);
    const dir = Math.sign(blockedSide);
    return { x: midX + perp.x * offset * dir, y: midY + perp.y * offset * dir };
  }
  return { x: midX, y: midY };
}

function bezierPoint(a, c, b, t) {
  const u = 1 - t;
  return {
    x: u * u * a.x + 2 * u * t * c.x + t * t * b.x,
    y: u * u * a.y + 2 * u * t * c.y + t * t * b.y
  };
}

function bezierTangent(a, c, b, t) {
  const x = 2 * (1 - t) * (c.x - a.x) + 2 * t * (b.x - c.x);
  const y = 2 * (1 - t) * (c.y - a.y) + 2 * t * (b.y - c.y);
  const len = Math.hypot(x, y) || 1;
  return { x: x / len, y: y / len };
}

// Multi-pass label placement: score candidate positions along the edge curve
// across ts and perpendicular offsets, prefer near the midpoint with no overlap.
function labelPlacement(edgeItem, a, c, b, labelWidth, blockedRects) {
  const labelHeight = LABEL_H;
  const ts = [0.5, 0.42, 0.58, 0.36, 0.64, 0.3, 0.7, 0.25, 0.75];
  const perpOffsets = [0, 22, -22, 36, -36, 52, -52, 70, -70, 90, -90, 110, -110, 134, -134];
  const manualDx = edgeItem.labelDx || 0;
  const manualDy = edgeItem.labelDy || 0;
  let best = null;

  for (const t of ts) {
    const pt = bezierPoint(a, c, b, t);
    const tan = bezierTangent(a, c, b, t);
    const perp = { x: -tan.y, y: tan.x };
    for (const off of perpOffsets) {
      const cx = pt.x + perp.x * off + manualDx;
      const cy = pt.y + perp.y * off + manualDy;
      const rect = { x: cx - labelWidth / 2, y: cy - labelHeight / 2, w: labelWidth, h: labelHeight };
      const overlap = blockedRects.reduce((sum, r) => sum + rectOverlap(rect, r), 0);
      // prefer closer to midpoint t=0.5, prefer smaller perpendicular offset, heavily penalise overlap
      const score = overlap * 4000 + Math.abs(t - 0.5) * 300 + Math.abs(off);
      if (!best || score < best.score) {
        best = { x: cx, y: cy, rect, score, overlap };
      }
      if (overlap === 0 && off === 0 && Math.abs(t - 0.5) < 0.05) {
        return best;
      }
    }
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
    })),
    scenario("نظير المرأة (الذكور المحرّمون)", () => ({
      title: "نظير المرأة في النسب",
      subtitle: "يحرم على المرأة من الرجال نظير ما يحرم على الرجل من النساء",
      toggle: null,
      nodes: [
        node("self", "أنتِ", 470, 290, "neutral", "محور المثال", "نظير ما يحرم على الرجل بالنسب من النساء، يحرم على المرأة من الرجال.", { gender: "f" }),
        node("father", "الأب\nوإن علا", 470, 110, "blocked", "الأب والأجداد", "أبوكِ وأجدادكِ من جهة الأب أو الأم.", { gender: "m" }),
        node("son", "الابن\nوإن نزل", 470, 470, "blocked", "الأبناء والأحفاد", "ابنكِ وابن ابنكِ وابن بنتكِ وإن نزلوا.", { gender: "m" }),
        node("brother", "الإخوة", 220, 290, "blocked", "الإخوة مطلقاً", "الأخ الشقيق، لأب، أو لأم.", { gender: "m" }),
        node("uncle", "العم\nوالخال", 720, 200, "blocked", "العم والخال", "أعمامكِ وأخوالكِ، وأعمام/أخوال أصولكِ.", { gender: "m" }),
        node("nephew", "ابن الأخ\nأو الأخت", 720, 380, "blocked", "أبناء الإخوة والأخوات", "ابن أخيكِ وابن أختكِ وإن نزلوا.", { gender: "m" }),
        node("cousin", "ابن العم\nأو الخال", 220, 470, "allowed", "غير محرم بالنسب", "أبناء العم والعمة والخال والخالة ليسوا محرمين بالنسب.", { gender: "m" })
      ],
      edges: [
        edge("father", "self", { label: "أب" }),
        edge("self", "son", { label: "أم" }),
        edge("self", "father", { status: "blocked", label: "أب محرم", curve: -55 }),
        edge("self", "son", { status: "blocked", label: "ابن محرم", curve: 55 }),
        edge("self", "brother", { status: "blocked", label: "أخ محرم", curve: 30 }),
        edge("self", "uncle", { status: "blocked", label: "عم/خال", curve: -45 }),
        edge("self", "nephew", { status: "blocked", label: "ابن الأخ", curve: 45 }),
        edge("self", "cousin", { status: "allowed", label: "يجوز", curve: -45 })
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
    scenario("عبد الله، ازدهار، لطيفة", () => {
      const built = genTree({
        rows: [
          [
            node("father", "أبو\nعبد الله", 0, 0, "neutral", "والد الزوج", "السؤال في المحاضرة: هل يجوز له الزواج من لطيفة؟", { gender: "m" }),
            node("latifa", "لطيفة\nأم ازدهار", 0, 0, "blocked", "أم الزوجة لعبد الله", "محرمة على عبد الله لأنها أم زوجته، لكنها جائزة لأبي عبد الله.", { gender: "f" })
          ],
          [
            node("abdullah", "عبد الله", 0, 0, "neutral", "الزوج", "عبد الله عقد على ازدهار.", { gender: "m" }),
            node("izdihar", "ازدهار", 0, 0, "blocked", "زوجة الابن بالنسبة لأبيه", "ازدهار تحرم على أبي عبد الله لأنها زوجة ابنه.", { gender: "f" })
          ]
        ],
        marriages: [["abdullah", "izdihar"]],
        parents: [
          { id: "abdullah", parents: ["father"] },
          { id: "izdihar", parents: ["latifa"] }
        ],
        colWidth: 260
      });
      return {
        title: "مثال: عبد الله وازدهار ولطيفة",
        subtitle: "أم الزوجة محرمة على الزوج، لكنها ليست محرمة على والد الزوج",
        toggle: null,
        nodes: built.nodes,
        edges: [
          ...built.extraEdges,
          edge("abdullah", "latifa", { status: "blocked", label: "أم الزوجة", curve: 60 }),
          edge("father", "izdihar", { status: "blocked", label: "زوجة الابن", curve: -60 }),
          edge("father", "latifa", { status: "allowed", label: "يجوز" })
        ]
      };
    }),
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
    scenario("عمر، سعاد، تفاحة", (condition) => {
      const built = genTree({
        rows: [
          [node("fatherOmar", "أبو عمر", 0, 0, "neutral", "والد عمر", "لا تصبح تفاحة بنت ابن له.", { gender: "m" })],
          [
            node("omar", "عمر", 0, 0, "neutral", "الزوج", "عمر تزوج سعاد، ولسعاد بنت اسمها تفاحة من زوج سابق.", { gender: "m" }),
            node("suad", "سعاد", 0, 0, "neutral", "الزوجة والأم", "هي الأم التي يشترط الدخول بها لتحريم بنتها.", { gender: "f" })
          ],
          [
            node("tuffaha", "تفاحة\nبنت سعاد", 0, 0, condition ? "blocked" : "allowed", "الربيبة", condition ? "بعد الدخول بسعاد، تفاحة محرمة على عمر مؤبداً، لكنها ليست بنت ابن لأبي عمر." : "إذا طلق عمر سعاد قبل الدخول، لا تحرم عليه تفاحة.", { gender: "f" })
          ]
        ],
        marriages: [["omar", "suad"]],
        parents: [
          { id: "omar", parents: ["fatherOmar"] },
          { id: "tuffaha", parents: ["suad"] }
        ],
        colWidth: 240
      });
      return {
        title: "مثال: شرط الدخول للربيبة",
        subtitle: "بنت الزوجة لا تحرم إلا بالدخول بأمها",
        toggle: { label: "دخل عمر بسعاد" },
        nodes: built.nodes,
        edges: [
          ...built.extraEdges,
          edge("omar", "tuffaha", { status: condition ? "blocked" : "allowed", label: condition ? "ربيبة محرمة" : "يجوز", curve: -55 }),
          edge("fatherOmar", "tuffaha", { status: "allowed", label: "يجوز للأب", curve: 55 })
        ]
      };
    }),
    scenario("مريم: البنت اللاحقة", () => {
      const built = genTree({
        rows: [
          [
            node("omar", "عمر", 0, 0, "neutral", "الزوج السابق", "عمر طلق سعاد.", { gender: "m" }),
            node("suad", "سعاد", 0, 0, "neutral", "بين زوجين", "بعد طلاق عمر، تزوجت سعاد رجلاً آخر.", { gender: "f" }),
            node("newHusband", "زوج آخر", 0, 0, "neutral", "الزوج اللاحق", "مريم ولدت من علاقة سعاد بالزوج الآخر بعد طلاق عمر.", { gender: "m" })
          ],
          [
            node("mariam", "مريم", 0, 0, "allowed", "ليست ربيبة لعمر", "مريم غير محرمة على عمر لأنها ليست بنت زوجته حال زوجيتها معه.", { gender: "f" })
          ]
        ],
        marriages: [["suad", "newHusband"]],
        parents: [
          { id: "mariam", parents: ["suad", "newHusband"] }
        ],
        colWidth: 230
      });
      return {
        title: "مثال: البنت اللاحقة بعد الطلاق",
        subtitle: "البنت التي وُلدت بعد زوال الزوجية ليست ربيبة لذلك الزوج",
        toggle: null,
        nodes: built.nodes,
        edges: [
          ...built.extraEdges,
          edge("omar", "suad", { status: "temporary", label: "زواج سابق ثم طلاق", curve: -45 }),
          edge("omar", "mariam", { status: "allowed", label: "ليست ربيبة" })
        ]
      };
    }),
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
    })),
    scenario("شجرة موسعة: ثلاثة أجيال", () => {
      const built = genTree({
        rows: [
          [
            node("grand", "أبو سعيد\n(الجد)", 0, 0, "neutral", "الجد", "والد سعيد، وهو الأصل في هذا المثال.", { gender: "m" }),
            node("hindMother", "أم هند", 0, 0, "allowed", "أم زوجة الابن", "أم زوجة الابن لا تحرم على والد الابن، فيجوز لأبي سعيد التزوج منها.", { gender: "f" })
          ],
          [
            node("saeed", "سعيد", 0, 0, "neutral", "الزوج/الابن", "سعيد ابن أبي سعيد، تزوج من هند.", { gender: "m" }),
            node("hind", "هند", 0, 0, "blocked", "زوجة الابن للجد", "هند تحرم على أبي سعيد بمجرد العقد، فهي زوجة ابنه.", { gender: "f" })
          ],
          [
            node("hindDaughter", "بنت هند\nمن زوج آخر", 0, 0, "allowed", "بنت زوجة الابن", "بنت هند من زوج سابق ليست محرمة على أبي سعيد بهذا السبب.", { gender: "f" })
          ]
        ],
        marriages: [["saeed", "hind"]],
        parents: [
          { id: "saeed", parents: ["grand"] },
          { id: "hind", parents: ["hindMother"] },
          { id: "hindDaughter", parents: ["hind"] }
        ],
        colWidth: 250
      });
      return {
        title: "أصول الزوج وفروع الزوجة",
        subtitle: "تتبع: من يحرم على من في الجيل الأول والثاني",
        toggle: null,
        nodes: [
          ...built.nodes,
          node("rule", "أصول وفروع\nزوجة الابن\nغير محرمات", 940, 480, "neutral", "قاعدة المثال", "الذي يحرم على الجد هو زوجة ابنه فقط، لا أصولها ولا فروعها من غير ابنه.", { shape: "rule" })
        ],
        edges: [
          ...built.extraEdges,
          edge("grand", "hind", { status: "blocked", label: "زوجة الابن", curve: -50 }),
          edge("grand", "hindMother", { status: "allowed", label: "يجوز" }),
          edge("grand", "hindDaughter", { status: "allowed", label: "يجوز", curve: -55 }),
          edge("rule", "grand", { label: "تطبيق", curve: -30 })
        ]
      };
    })
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
    scenario("خالد، سعاد، سهام", () => {
      const built = genTree({
        rows: [
          [
            node("suad", "سعاد", 0, 0, "blocked", "الأم بالرضاع", "سعاد أرضعت عمر فصارت أمه بالرضاع.", { gender: "f" }),
            node("khaled", "خالد", 0, 0, "blocked", "الأب بالرضاع", "خالد زوج سعاد ولديه زوجة أخرى سهام. اللبن سببه خالد.", { gender: "m" }),
            node("siham", "سهام", 0, 0, "blocked", "زوجة أب عمر بالرضاع", "سهام زوجة أخرى لخالد، فتصير زوجة أب عمر بالرضاع وتحرم عليه.", { gender: "f" })
          ],
          [
            node("omar", "عمر", 0, 0, "neutral", "الرضيع", "عمر رضع من سعاد، فصار خالد أباه بالرضاع.", { gender: "m" })
          ]
        ],
        marriages: [["suad", "khaled"], ["khaled", "siham"]],
        parents: [
          { id: "omar", parents: ["suad", "khaled"] }
        ],
        colWidth: 230
      });
      return {
        title: "مثال: زوجة الأب بالرضاع",
        subtitle: "إذا صار خالد أباً لعمر بالرضاع، حرمت زوجته الأخرى سهام",
        toggle: null,
        nodes: built.nodes,
        edges: [
          ...built.extraEdges,
          edge("omar", "siham", { status: "blocked", label: "زوجة الأب بالرضاع", curve: 70 })
        ]
      };
    }),
    scenario("سهام وختام", () => {
      const built = genTree({
        rows: [
          [
            node("khitam", "ختام", 0, 0, "blocked", "أم الزوجة بالرضاع", "ختام أرضعت سهام صغيرة، فصارت أم زوجة عمر بالرضاع.", { gender: "f" })
          ],
          [
            node("omar", "عمر", 0, 0, "neutral", "الزوج", "عمر تزوج سهام.", { gender: "m" }),
            node("siham", "سهام", 0, 0, "neutral", "الزوجة", "سهام رضعت صغيرة من ختام، ثم تزوجها عمر.", { gender: "f" })
          ]
        ],
        marriages: [["omar", "siham"]],
        parents: [
          { id: "siham", parents: ["khitam"] }
        ],
        colWidth: 240
      });
      return {
        title: "مثال: أم الزوجة بالرضاع",
        subtitle: "من أرضعت الزوجة وهي صغيرة تصير أم زوجة بالرضاع",
        toggle: null,
        nodes: built.nodes,
        edges: [
          ...built.extraEdges,
          edge("omar", "khitam", { status: "blocked", label: "أم الزوجة بالرضاع", curve: 60 })
        ]
      };
    }),
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
    scenario("لبن الفحل: فوزي وسامية وخالدية", () => {
      const built = genTree({
        rows: [
          [
            node("samia", "سامية", 0, 0, "neutral", "الزوجة الأولى", "سامية أرضعت عمر، فصارت أمه بالرضاع.", { gender: "f" }),
            node("fawzi", "فوزي", 0, 0, "blocked", "صاحب اللبن", "فوزي زوج كل من سامية وخالدية. اللبن في الحالتين سببه فوزي.", { gender: "m" }),
            node("khaldiya", "خالدية", 0, 0, "neutral", "الزوجة الثانية / المرضعة", "خالدية أرضعت انتصار. اللبن سببه فوزي (لبن الفحل).", { gender: "f" })
          ],
          [
            node("omar", "عمر", 0, 0, "neutral", "ابن سامية", "عمر ابن سامية وفوزي بالنسب.", { gender: "m" }),
            node("intisar", "انتصار", 0, 0, "blocked", "بنت خالدية وفوزي بالرضاع", "صارت بنتاً لخالدية بالرضاع وبنتاً لفوزي بلبن الفحل، فهي عمة عمر بالرضاع.", { gender: "f" })
          ]
        ],
        marriages: [["samia", "fawzi"], ["fawzi", "khaldiya"]],
        parents: [
          { id: "omar", parents: ["samia", "fawzi"] },
          { id: "intisar", parents: ["khaldiya", "fawzi"] }
        ],
        colWidth: 230
      });
      return {
        title: "مثال: لبن الفحل",
        subtitle: "اللبن ينسب للرجل الواحد ولو تعددت الزوجات المرضعات",
        toggle: null,
        nodes: built.nodes,
        edges: [
          ...built.extraEdges,
          edge("omar", "intisar", { status: "blocked", label: "عمة بالرضاع (تحرم)", curve: 30 })
        ]
      };
    }),
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
    })),
    scenario("المستثنيات العشر (لا تحرم)", () => ({
      title: "المستثنيات العشر في الرضاع",
      subtitle: "حالات استُثنيت من قاعدة (يحرم بالرضاع ما يحرم بالنسب)",
      toggle: null,
      nodes: [
        node("rule", "القاعدة:\nيحرم بالرضاع\nما يحرم بالنسب\nإلا ما استُثني", 470, 290, "neutral", "القاعدة الأم", "قاعدة باب الرضاع، ولها مستثنيات عشر لا تحرم.", { shape: "rule" }),
        node("e1", "أم الأخ\nوأم الأخت\nبالرضاع", 200, 110, "allowed", "1) أم الأخ بالرضاع", "أم أخيك من الرضاع لا تكون أمك، فلا تحرم عليك من جهة الرضاع."),
        node("e2", "أخت الابن\nوأخت البنت\nبالرضاع", 470, 90, "allowed", "2) أخت الابن بالرضاع", "أخت ابنك بالرضاع ليست بنتك بالرضاع، فلا تحرم عليك."),
        node("e3", "جدة الابن\nأو البنت\nبالرضاع", 740, 110, "allowed", "3) جدة الابن بالرضاع", "جدة ابنك بالرضاع لا تأخذ حكم أمك."),
        node("e4", "أم العم\nوأم العمة\nبالرضاع", 920, 290, "allowed", "4) أم العم بالرضاع", "أم عمك بالرضاع لا تحرم عليك."),
        node("e5", "أم الخال\nوأم الخالة\nبالرضاع", 740, 470, "allowed", "5) أم الخال بالرضاع", "أم خالك بالرضاع لا تحرم عليك."),
        node("e6", "عمة الابن\nأو البنت\nبالرضاع", 470, 490, "allowed", "6) عمة الابن بالرضاع", "عمة ابنك بالرضاع لا تكون أختك بالرضاع."),
        node("e7", "بنت عمة\nالابن أو\nالبنت", 200, 470, "allowed", "7) بنت عمة الابن بالرضاع", "بنت عمة ابنك بالرضاع لا تحرم."),
        node("e8", "بنت أخت\nالابن أو\nالبنت", 20, 290, "allowed", "8) بنت أخت الابن بالرضاع", "بنت أخت ابنك بالرضاع لا تحرم."),
        node("e9", "أم أم ولد\nالابن أو\nالبنت", 200, 290, "allowed", "9) أم أم ولد الابن بالرضاع", "أم أم ولد ابنك بالرضاع لا تحرم."),
        node("e10", "أخت الأخ\nأو الأخت\nبالرضاع", 740, 290, "allowed", "10) أخت الأخ بالرضاع", "أخت أخيك بالرضاع، إذا كانت من جهة أخرى، لا تحرم.")
      ],
      edges: [
        edge("rule", "e1", { status: "allowed", label: "١ — لا تحرم" }),
        edge("rule", "e2", { status: "allowed", label: "٢ — لا تحرم" }),
        edge("rule", "e3", { status: "allowed", label: "٣ — لا تحرم" }),
        edge("rule", "e4", { status: "allowed", label: "٤ — لا تحرم" }),
        edge("rule", "e5", { status: "allowed", label: "٥ — لا تحرم" }),
        edge("rule", "e6", { status: "allowed", label: "٦ — لا تحرم" }),
        edge("rule", "e7", { status: "allowed", label: "٧ — لا تحرم" }),
        edge("rule", "e8", { status: "allowed", label: "٨ — لا تحرم" }),
        edge("rule", "e9", { status: "allowed", label: "٩ — لا تحرم" }),
        edge("rule", "e10", { status: "allowed", label: "١٠ — لا تحرم" })
      ]
    })),
    scenario("ما يحلّ للمرأة من الرضاع", () => ({
      title: "ما يحل للمرأة من الرضاع",
      subtitle: "ثمان حالات يجوز للمرأة فيها الزواج رغم الرضاع",
      toggle: null,
      nodes: [
        node("self", "المرأة", 470, 290, "neutral", "محور المثال", "هذه الحالات يحل للمرأة بالرضاع، فلا يقاس فيها على النسب.", { gender: "f", shape: "rule" }),
        node("a1", "أبو أخيها\nبالرضاع", 230, 110, "allowed", "1) أبو أخيها بالرضاع", "أبو أخيك بالرضاع ليس أباك، فيجوز.", { gender: "m" }),
        node("a2", "أخو ابنها\nبالرضاع", 470, 90, "allowed", "2) أخو ابنها بالرضاع", "أخو ابنك بالرضاع ليس ابنك، فيجوز.", { gender: "m" }),
        node("a3", "جد ابنها\nبالرضاع", 720, 110, "allowed", "3) جد ابنها بالرضاع", "جد ابنك بالرضاع ليس أباك ولا جدك، فيجوز.", { gender: "m" }),
        node("a4", "أبو عمها\nبالرضاع", 900, 290, "allowed", "4) أبو عمها بالرضاع", "أبو عمك بالرضاع ليس جدك من جهة الرضاع.", { gender: "m" }),
        node("a5", "أبو خالها\nبالرضاع", 720, 470, "allowed", "5) أبو خالها بالرضاع", "أبو خالك بالرضاع ليس جدك من أمك بالرضاع.", { gender: "m" }),
        node("a6", "خال ولدها\nبالرضاع", 470, 490, "allowed", "6) خال ولدها بالرضاع", "خال ولدك بالرضاع ليس أخاك بالرضاع.", { gender: "m" }),
        node("a7", "ابن خالة\nولدها", 230, 470, "allowed", "7) ابن خالة ولدها بالرضاع", "ابن خالة ولدك بالرضاع ليس ابن خالتك.", { gender: "m" }),
        node("a8", "ابن أخت\nولدها", 50, 290, "allowed", "8) ابن أخت ولدها بالرضاع", "ابن أخت ولدك بالرضاع لا يأخذ حكم ابن أختك.", { gender: "m" })
      ],
      edges: [
        edge("self", "a1", { status: "allowed", label: "يجوز", curve: -25 }),
        edge("self", "a2", { status: "allowed", label: "يجوز", curve: 0 }),
        edge("self", "a3", { status: "allowed", label: "يجوز", curve: 25 }),
        edge("self", "a4", { status: "allowed", label: "يجوز", curve: 0 }),
        edge("self", "a5", { status: "allowed", label: "يجوز", curve: 25 }),
        edge("self", "a6", { status: "allowed", label: "يجوز", curve: 0 }),
        edge("self", "a7", { status: "allowed", label: "يجوز", curve: -25 }),
        edge("self", "a8", { status: "allowed", label: "يجوز", curve: 0 })
      ]
    })),
    scenario("آثار التفريق بسبب الرضاع", () => ({
      title: "أثر اكتشاف الرضاع بعد العقد",
      subtitle: "يفرّق القاضي، وتختلف الآثار قبل الدخول وبعده",
      toggle: null,
      nodes: [
        node("case", "اكتُشف\nالرضاع المحرّم", 470, 110, "blocked", "مدخل المسألة", "بعد العقد ثبت أن الزوجين أخوان أو أم/ابن... بالرضاع.", { shape: "rule" }),
        node("split", "يفرّق\nالقاضي", 470, 290, "blocked", "حكم القضاء", "لا بد من التفريق لأنهم محارم، ولا يستمر العقد.", { shape: "rule" }),
        node("before", "قبل الدخول", 230, 470, "neutral", "قبل الدخول", "إذا لم يحصل دخول حقيقي.", { shape: "rule" }),
        node("after", "بعد الدخول", 720, 470, "neutral", "بعد الدخول", "إذا حصل دخول حقيقي.", { shape: "rule" }),
        node("beforeOut", "لا مهر،\nلا نفقة،\nلا سكنى", 230, 640, "allowed", "النتيجة قبل الدخول", "لا تستحق المرأة شيئاً من الحقوق المالية.", { shape: "rule" }),
        node("afterOut", "الأقل من\nالمسمّى\nومهر المثل\n(لا نفقة\nلا سكنى)", 720, 670, "temporary", "النتيجة بعد الدخول", "تستحق الأقل من المهر المسمى ومهر المثل، ولا نفقة ولا سكنى.", { shape: "rule" })
      ],
      edges: [
        edge("case", "split", { status: "blocked", label: "تفريق" }),
        edge("split", "before", { label: "قبل" }),
        edge("split", "after", { label: "بعد" }),
        edge("before", "beforeOut", { status: "allowed", label: "نتيجة" }),
        edge("after", "afterOut", { status: "temporary", label: "نتيجة" })
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
    })),
    scenario("زوجة العم/الخال (تأقيت لا نسب)", () => ({
      title: "زوجة العم وزوجة الخال",
      subtitle: "خطأ شائع: اعتبارها محرمة مؤبداً بسبب القرابة، والصواب: مؤقت بسبب كونها زوجة الغير",
      toggle: null,
      nodes: [
        node("self", "أنت", 470, 290, "neutral", "محور المثال", "زوجة العم أو الخال محرمة عليك ما دامت زوجة لأحدهما.", { gender: "m" }),
        node("uncle", "العم\nأو الخال", 230, 110, "neutral", "العم/الخال نفسه محرم على المرأة، لا على الرجل", "العم محرم على المرأة بالنسب، لكن السؤال هنا عن زوجته.", { gender: "m" }),
        node("uncleWife", "زوجة العم\nأو الخال", 230, 470, "temporary", "محرمة مؤقتاً", "تحرم بسبب كونها زوجة الغير، لا بسبب القرابة.", { gender: "f" }),
        node("after", "بعد طلاقها\nأو وفاته\nوانقضاء العدة", 720, 290, "allowed", "زوال السبب", "يجوز الزواج بها لأن السبب (الزوجية/العدة) قد زال.", { shape: "rule" }),
        node("rule", "السبب:\nزوجية/عدة\nلا قرابة", 720, 110, "neutral", "تنبيه", "هذا فرق دقيق لكنه مهم في الامتحان.", { shape: "rule" })
      ],
      edges: [
        edge("uncle", "uncleWife", { label: "زواج" }),
        edge("self", "uncle", { label: "قرابة" }),
        edge("self", "uncleWife", { status: "temporary", label: "زوجة الغير", curve: -65 }),
        edge("uncleWife", "after", { status: "allowed", label: "بعد العدة" }),
        edge("rule", "uncleWife", { label: "تنبيه" })
      ]
    })),
    scenario("زواج التحليل: التيس المستعار", () => ({
      title: "المطلقة ثلاثاً وزواج التحليل",
      subtitle: "زواج بقصد الإحلال محرم، ورد لعنه: المحلِّل والمحلَّل له",
      toggle: null,
      nodes: [
        node("first", "الزوج\nالأول", 230, 470, "neutral", "المطلق ثلاثاً", "طلق امرأته ثلاث طلقات.", { gender: "m" }),
        node("woman", "المطلقة\nثلاثاً", 470, 290, "temporary", "محرمة على الأول", "لا تحل له حتى تنكح غيره زواجاً صحيحاً ويدخل بها.", { gender: "f" }),
        node("muhallil", "محلِّل", 720, 290, "blocked", "زوج تحليل (محرم)", "إذا تزوجها بقصد التحليل بلا نية حقيقية فهذا محرم وملعون فاعله.", { gender: "m", badge: "ملعون" }),
        node("real", "زوج\nثانٍ\nصحيح", 720, 470, "neutral", "زوج حقيقي", "زواج صحيح بنية إقامة الأسرة، ودخول حقيقي.", { gender: "m" }),
        node("split", "وفاة أو\nطلاق ثم\nعدة", 470, 470, "neutral", "زوال السبب", "لا بد من فراق وانتهاء عدة.", { shape: "rule" }),
        node("return", "تحل\nللأول", 230, 290, "allowed", "بعد تحقق الشروط", "بعد كل شيء، تحل للأول إذا كان ذلك بلا اتفاق تحليل.", { shape: "rule" }),
        node("rule", "التيس\nالمستعار", 720, 110, "blocked", "اسم في كلام الفقهاء", "كناية عن المحلِّل: لأنه استُعير لمهمة لا يريدها.", { shape: "rule" })
      ],
      edges: [
        edge("first", "woman", { status: "temporary", label: "طلقة ثالثة", curve: 30 }),
        edge("woman", "muhallil", { status: "blocked", label: "تحليل (محرم)", curve: -30 }),
        edge("woman", "real", { label: "زواج صحيح", curve: 30 }),
        edge("real", "split", { label: "ثم فراق" }),
        edge("split", "return", { status: "allowed", label: "بعد عدة" }),
        edge("return", "first", { status: "allowed", label: "تعود" }),
        edge("rule", "muhallil", { status: "blocked", label: "كناية" })
      ]
    })),
    scenario("الجمع: لو فُرضت ذكراً", () => ({
      title: "قاعدة الجمع بين النساء",
      subtitle: "لا يجوز الجمع بين امرأتين لو فُرضت إحداهما ذكراً حرم زواجه من الأخرى",
      toggle: null,
      nodes: [
        node("self", "الزوج", 470, 290, "neutral", "محور المثال", "متزوج من مريم ويريد الزواج من خالتها أسماء.", { gender: "m" }),
        node("mariam", "مريم\nالزوجة", 230, 110, "neutral", "الزوجة الأولى", "أصلها هي القائمة في عصمته أو معتدته.", { gender: "f" }),
        node("asmaa", "أسماء\nخالة مريم", 720, 110, "temporary", "محرمة مؤقتاً", "تحرم بسبب الجمع، لأنها لو كانت ذكراً لكان خالاً لمريم فلا يحل له تزوجها.", { gender: "f" }),
        node("test", "افترض\nأسماء\nذكراً", 720, 470, "blocked", "اختبار القاعدة", "لو فرضنا أسماء رجلاً، صار خالاً لمريم، فلا يحل له خطبة بنت أخته.", { shape: "rule" }),
        node("after", "بعد طلاق\nمريم وانقضاء\nعدتها", 230, 470, "allowed", "زوال السبب", "إذا زال سبب الجمع وانتهت العدة جاز.", { shape: "rule" })
      ],
      edges: [
        edge("self", "mariam", { label: "زواج" }),
        edge("mariam", "asmaa", { label: "خالة" }),
        edge("self", "asmaa", { status: "temporary", label: "منع الجمع", curve: -55 }),
        edge("asmaa", "test", { status: "blocked", label: "تطبيق القاعدة" }),
        edge("mariam", "after", { status: "allowed", label: "بعد العدة" })
      ]
    })),
    scenario("النكاح غير الكتابية", () => ({
      title: "غير الكتابية",
      subtitle: "لا تحل للمسلم إلا بإسلامها أو تحقق وصف الكتابية",
      toggle: null,
      nodes: [
        node("self", "الرجل\nالمسلم", 470, 290, "neutral", "محور المثال", "حكم زواج المسلم بغير الكتابية.", { gender: "m" }),
        node("nonScripture", "غير\nكتابية", 470, 110, "temporary", "محرمة مؤقتاً", "كالوثنية، الملحدة، البوذية، الهندوسية...", { gender: "f" }),
        node("scripture", "كتابية\n(يهودية/\nنصرانية)", 230, 290, "allowed", "كتابية", "يجوز الزواج بها مع الضوابط الشرعية.", { gender: "f" }),
        node("convert", "بعد إسلامها", 720, 290, "allowed", "زوال السبب", "إذا أسلمت زال المانع وحل الزواج بها.", { shape: "rule" }),
        node("note", "ليس كل\nأهل كتاب\nمعاصرين\nكتابيين\nقضاءً", 470, 470, "neutral", "ملاحظة", "بعض القوانين تشترط أن يكون التدين واضحاً وموثقاً.", { shape: "rule" })
      ],
      edges: [
        edge("self", "nonScripture", { status: "temporary", label: "ممنوع", curve: -45 }),
        edge("self", "scripture", { status: "allowed", label: "يجوز", curve: 30 }),
        edge("nonScripture", "convert", { status: "allowed", label: "بعد إسلامها" }),
        edge("self", "note", { label: "تنبيه" })
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
    Array.isArray(edgeDef) ? edge(edgeDef[0], edgeDef[1], edgeDef[2] || {}) : edgeDef
  ));

  // Cache adaptive sizes + bounds (so nodeBounds isn't recomputed)
  const sizeById = Object.fromEntries(data.nodes.map((item) => [item.id, nodeSize(item)]));
  const nodeRects = data.nodes.map((item) => ({ id: item.id, ...nodeBounds(item) }));

  // Build edge geometry. Marriage/parent edges are structural and use
  // straight or L-shape paths anchored to the node edges (top/bottom),
  // not the centers, so they look like real family-tree connectors.
  const edgeGeo = normalizedEdges.map((item) => {
    const a = nodesById[item.from];
    const b = nodesById[item.to];
    if (item.kind === "marriage") {
      // straight line at common Y between the two spouses (use centers; usually same row)
      const c = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      return { a: { x: a.x, y: a.y }, b: { x: b.x, y: b.y }, c, kind: "marriage" };
    }
    if (item.kind === "parent") {
      const sa = sizeById[a.id];
      const sb = sizeById[b.id];
      // Drop from parent's bottom to child's top
      const aAnchor = { x: a.x, y: a.y + sa.h / 2 };
      const bAnchor = { x: b.x, y: b.y - sb.h / 2 };
      const c = { x: a.x, y: (aAnchor.y + bAnchor.y) / 2 };
      return { a: aAnchor, b: bAnchor, c, kind: "parent" };
    }
    const endpointIds = new Set([item.from, item.to]);
    const c = edgeControlPoint(a, b, item.curve, nodeRects, endpointIds);
    return { a, b, c, kind: item.kind || "verdict" };
  });

  // Sample points along each VERDICT edge curve as small obstacles for label
  // placement. Marriage/parent edges are skipped — they're rigid scaffolding.
  const SAMPLE_RADIUS = 6;
  const edgeSamplesByIndex = edgeGeo.map((g) => {
    if (g.kind === "marriage" || g.kind === "parent") return [];
    const samples = [];
    for (let i = 1; i <= 9; i++) {
      const t = i / 10;
      const p = bezierPoint(g.a, g.c, g.b, t);
      samples.push({ x: p.x - SAMPLE_RADIUS, y: p.y - SAMPLE_RADIUS, w: SAMPLE_RADIUS * 2, h: SAMPLE_RADIUS * 2 });
    }
    return samples;
  });

  // Multi-pass label placement, considering all node rects + already-placed labels +
  // foreign edge samples (so labels don't sit on top of crossing edges). Marriage
  // and parent edges never carry labels — they're structural scaffolding.
  const placedLabels = [];
  const labelData = normalizedEdges.map((item, index) => {
    if (item.kind === "marriage" || item.kind === "parent") return null;
    const status = item.status || "family";
    const labelText = status === "family" && item.kind !== "verdict" ? "" : item.label;
    if (!labelText) return null;
    const labelWidth = Math.max(72, labelText.length * (LABEL_FONT * 0.62) + LABEL_PAD_X * 2);
    const { a, b, c } = edgeGeo[index];
    const foreignEdgeSamples = edgeSamplesByIndex.flatMap((arr, j) => (j === index ? [] : arr));
    const obstacles = [...nodeRects, ...placedLabels, ...foreignEdgeSamples];
    const placement = labelPlacement(item, a, c, b, labelWidth, obstacles);
    placedLabels.push(placement.rect);
    return { text: labelText, width: labelWidth, x: placement.x, y: placement.y, status };
  });

  // Compute viewBox from node rects + label rects + edge control points
  const allRects = [...nodeRects, ...placedLabels];
  const minX = Math.min(...allRects.map((r) => r.x), ...edgeGeo.map((g) => g.c.x)) - 24;
  const maxX = Math.max(...allRects.map((r) => r.x + r.w), ...edgeGeo.map((g) => g.c.x)) + 24;
  const minY = Math.min(...allRects.map((r) => r.y), ...edgeGeo.map((g) => g.c.y)) - 24;
  const maxY = Math.max(...allRects.map((r) => r.y + r.h), ...edgeGeo.map((g) => g.c.y)) + 24;
  familySvg.setAttribute("viewBox", `${minX} ${minY} ${maxX - minX} ${maxY - minY}`);
  familySvg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  // Render edges (curves first so nodes overlap them).
  // Marriage = straight line + small "زواج" glyph at midpoint.
  // Parent = L-shape (down → across → down) for proper tree-drop.
  // Verdict/relation = quadratic Bézier (existing behaviour).
  const edgesSvg = normalizedEdges.map((item, index) => {
    const geo = edgeGeo[index];
    const { a, b, c } = geo;
    const status = item.status || "family";
    const kind = geo.kind || "verdict";
    let d;
    let extra = "";
    if (kind === "marriage") {
      d = `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
      // small "=" glyph as a marriage symbol at midpoint, rendered above the line
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      extra = `<g class="marriage-glyph"><rect x="${mx - 16}" y="${my - 12}" width="32" height="24" rx="6"></rect><text x="${mx}" y="${my + 1}">زواج</text></g>`;
    } else if (kind === "parent") {
      const midY = (a.y + b.y) / 2;
      d = `M ${a.x} ${a.y} L ${a.x} ${midY} L ${b.x} ${midY} L ${b.x} ${b.y}`;
    } else {
      d = `M ${a.x} ${a.y} Q ${c.x} ${c.y}, ${b.x} ${b.y}`;
    }
    const info = labelData[index];
    const label = info
      ? `<g class="edge-label ${status}">
          <rect x="${info.x - info.width / 2}" y="${info.y - LABEL_H / 2}" width="${info.width}" height="${LABEL_H}" rx="9"></rect>
          <text x="${info.x}" y="${info.y + 1}">${info.text}</text>
        </g>`
      : "";
    return `<g class="edge-group ${status} ${kind}"><path class="edge ${status} ${kind}" d="${d}" />${extra}${label}</g>`;
  }).join("");

  // Render nodes with adaptive sizing
  const nodesSvg = data.nodes.map((item) => {
    const s = sizeById[item.id];
    const lines = item.label.split("\n");
    const baseY = item.y - ((lines.length - 1) * NODE_LINE) / 2;
    const tspans = lines.map((line, index) => `<tspan x="${item.x}" y="${baseY + index * NODE_LINE}">${escapeXml(line)}</tspan>`).join("");
    // Person nodes: rounded-rectangle with subtle gender icon
    const rx = s.h / 2;     // pill shape feel
    const rectX = item.x - s.w / 2;
    const rectY = item.y - s.h / 2;
    const isCenter = item.id === "self" || item.shape === "rule";
    const shape = `<rect x="${rectX}" y="${rectY}" width="${s.w}" height="${s.h}" rx="${isCenter ? 12 : Math.min(22, rx)}"></rect>`;
    const genderIcon = item.gender
      ? `<text class="gender-icon" x="${rectX + 14}" y="${rectY + 18}">${item.gender === "f" ? "♀" : "♂"}</text>`
      : "";
    const badge = item.badge
      ? `<g class="node-badge"><rect x="${rectX + s.w / 2 - 30}" y="${rectY - 14}" width="60" height="22" rx="11"></rect><text x="${rectX + s.w / 2}" y="${rectY - 1}">${escapeXml(item.badge)}</text></g>`
      : "";
    return `
      <g class="node ${item.status}${isCenter ? " is-center" : ""}" data-node="${item.id}" tabindex="0" role="button" aria-label="${escapeXml(item.label.replace(/\n/g, " "))}">
        ${shape}
        ${genderIcon}
        <text class="node-text">${tspans}</text>
        ${badge}
      </g>
    `;
  }).join("");

  familySvg.innerHTML = `${edgesSvg}${nodesSvg}`;
  familySvg.querySelectorAll(".node").forEach((el) => {
    el.addEventListener("click", () => showPerson(nodesById[el.dataset.node]));
    el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showPerson(nodesById[el.dataset.node]);
      }
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

// ─── Comparisons (madhabs) ────────────────────────────────────────────────────
const comparisons = [
  {
    title: "حرمة المصاهرة بالزنا",
    subtitle: "هل تثبت حرمة المصاهرة بالزنا؟",
    headers: ["المذهب", "الحكم", "السبب / الأثر"],
    rows: [
      { madhab: "shafii", cells: ["الشافعية والمالكية", "❌ لا تثبت", "لا يحرم على الزاني الزواج بأم المزني بها أو ابنتها."] },
      { madhab: "hanafi", cells: ["الحنفية", "✅ تثبت بجميع أنواعها", "تحرم أصول المزني بها وفروعها عليه، وعلى أصوله وفروعه."] },
      { madhab: "court",  cells: ["العمل القضائي", "🟢 يُؤخذ بقول الحنفية", "لسكوت قانون حقوق العائلة عن المسألة."] }
    ]
  },
  {
    title: "مقدار الرضاع المحرّم",
    subtitle: "الحنفية والشافعية مع المختار للإفتاء",
    headers: ["وجه المقارنة", "الحنفية", "الشافعية"],
    rows: [
      { madhab: "neutral", cells: ["المقدار", "ولو بمصة أو قطرة", "خمس رضعات متفرقات مشبعات"] },
      { madhab: "neutral", cells: ["الزمن", "في الحولين", "في الحولين"] },
      { madhab: "neutral", cells: ["الوصول", "إلى الجوف", "إلى الجوف"] },
      { madhab: "hanafi",  cells: ["الإفتاء ابتداءً (قبل الزواج)", "🟢 يُؤخذ به احتياطاً", "—"] },
      { madhab: "shafii",  cells: ["الإفتاء بقاءً (بعد الزواج)", "—", "🟢 يُؤخذ به حفاظاً على الأسرة"] },
      { madhab: "blocked", cells: ["النتيجة عند الثبوت", "التفريق بين الزوجين", "التفريق بين الزوجين"] }
    ]
  },
  {
    title: "آثار التفريق بسبب الرضاع",
    subtitle: "قبل الدخول وبعده",
    headers: ["الحالة", "المهر", "النفقة والسكنى"],
    rows: [
      { madhab: "allowed", cells: ["قبل الدخول", "❌ لا مهر", "❌ لا نفقة، لا سكنى"] },
      { madhab: "amber",   cells: ["بعد الدخول", "✅ الأقل من المسمّى ومهر المثل", "❌ لا نفقة، لا سكنى"] }
    ]
  },
  {
    title: "العقد الفاسد قبل/بعد الدخول",
    subtitle: "أثر العقد غير الصحيح على حرمة المصاهرة (مادة 135 قدري باشا)",
    headers: ["الحالة", "حرمة المصاهرة", "التوارث"],
    rows: [
      { madhab: "allowed", cells: ["تفريق/وفاة قبل الدخول ودواعيه", "❌ لا تثبت", "❌ لا توارث"] },
      { madhab: "blocked", cells: ["تفريق/وفاة بعد الدخول", "✅ تثبت", "—"] }
    ]
  },
  {
    title: "خطبة المعتدة والمخطوبة",
    subtitle: "متى يجوز التصريح والتعريض؟",
    headers: ["الحالة", "التصريح", "التعريض"],
    rows: [
      { madhab: "blocked", cells: ["مخطوبة وخطبتها قائمة", "🚫 ممنوع", "🚫 ممنوع إن أفسد"] },
      { madhab: "blocked", cells: ["معتدة من طلاق رجعي", "🚫 ممنوع", "🚫 ممنوع"] },
      { madhab: "hanafi",  cells: ["معتدة من طلاق بائن (الحنفية)", "🚫 ممنوع", "🚫 ممنوع"] },
      { madhab: "shafii",  cells: ["معتدة من طلاق بائن (الشافعية)", "🚫 ممنوع", "✅ جائز بضوابط"] },
      { madhab: "allowed", cells: ["معتدة من وفاة", "🚫 ممنوع اتفاقاً", "✅ جائز عند من يُجيزه"] }
    ]
  },
  {
    title: "التقسيم العام للمحرمات",
    subtitle: "تأبيد وتأقيت",
    headers: ["النوع", "السبب / الصنف", "متى يثبت / يزول"],
    rows: [
      { madhab: "blocked", cells: ["تأبيد — نسب", "أم، بنت، أخت، عمة، خالة، بنت أخ، بنت أخت", "بأصل العلاقة"] },
      { madhab: "blocked", cells: ["تأبيد — مصاهرة (1)", "زوجة الأب/الجد", "بمجرد العقد"] },
      { madhab: "blocked", cells: ["تأبيد — مصاهرة (2)", "أم الزوجة", "بمجرد العقد"] },
      { madhab: "blocked", cells: ["تأبيد — مصاهرة (3)", "الربيبة", "🔴 بالدخول بالأم"] },
      { madhab: "blocked", cells: ["تأبيد — مصاهرة (4)", "زوجة الابن", "بمجرد العقد"] },
      { madhab: "blocked", cells: ["تأبيد — رضاع", "ما يحرم بالنسب/المصاهرة (إلا 10 مستثنيات)", "بشروط الرضاع"] },
      { madhab: "amber",   cells: ["تأقيت", "زوجة الغير، الجمع، المطلقة 3، الخامسة، غير الكتابية", "إذا زال السبب زال التحريم"] }
    ]
  }
];

// ─── Verbatim exam questions from the lecture notes ─────────────────────────
const examQuestions = [
  // النسب
  { topic: "nasab", id: "3.3.1", q: "اذكر الأصناف الأربعة للمحرمات بالنسب.", a: "1) الأمهات وإن علون. 2) البنات وإن نزلن. 3) فروع الأبوين (الأخوات وبنات الإخوة وبنات الأخوات). 4) العمات والخالات للشخص ولأصوله." },
  { topic: "nasab", id: "3.3.2", q: "هل تحرم بنت العمة على الشخص؟ ولماذا؟", a: "لا تحرم. لأن بنات العم والعمة والخال والخالة مستثناة من المحرمات بالنسب، وإن كانت أمهاتهن (العمة والخالة) محرمات." },
  { topic: "nasab", id: "3.3.3", q: "ما الفرق بين الأخت لأب والأخت لأم؟", a: "الأخت لأب: من نفس الأب وأم مختلفة. الأخت لأم: من نفس الأم وأب مختلف." },
  { topic: "nasab", id: "3.3.4", q: "هل تحرم عمة الجد؟ تحت أي صنف تندرج؟", a: "نعم تحرم. تندرج تحت الصنف الرابع: عمات وخالات الأصول وإن علون." },
  // المصاهرة
  { topic: "musaharah", id: "3.6.1", q: "اذكر الأصناف الأربعة للمحرمات بالمصاهرة.", a: "1) زوجة الأب والجد وإن علا — بمجرد العقد. 2) أم الزوجة وجداتها — بمجرد العقد. 3) الربائب — بشرط الدخول بالأم. 4) زوجات الأبناء وإن نزلوا — بمجرد العقد." },
  { topic: "musaharah", id: "3.6.2", q: "متى تحرم بنت الزوجة (الربيبة)؟ ومتى لا تحرم؟", a: "تحرم إذا دخل الزوج بأمها دخولاً حقيقياً. لا تحرم إذا عقد على الأم ولم يدخل بها ثم طلقها أو ماتت." },
  { topic: "musaharah", id: "3.6.3", q: "ما الفرق بين تحريم أم الزوجة وتحريم بنت الزوجة من حيث شرط الدخول؟", a: "أم الزوجة تحرم بمجرد العقد. بنت الزوجة (الربيبة) لا تحرم إلا بالدخول بأمها." },
  { topic: "musaharah", id: "3.6.4", q: "اذكر القاعدتين الذهبيّتين في باب المصاهرة.", a: "1) العقد على البنات يحرّم الأمهات. 2) الدخول بالأمهات يحرّم البنات." },
  { topic: "musaharah", id: "3.6.5", q: "هل تثبت حرمة المصاهرة بالزنا في العمل القضائي؟ ولماذا؟", a: "نعم، يُصار إلى المعتمد عند الحنفية لسكوت قانون حقوق العائلة. الحنفية: تثبت. الشافعية والمالكية: لا تثبت." },
  { topic: "musaharah", id: "3.6.6", q: "هل تحرم أم زوجة الابن على والد الابن؟", a: "لا تحرم. لأن أصول زوجة الابن (كأمها) لا تحرم على أصل الزوج." },
  // الرضاع
  { topic: "radaa", id: "3.12.1", q: "ما القاعدة العامة في الرضاع المحرّم؟", a: "يحرم من الرضاع ما يحرم من النسب والمصاهرة — إلا ما استُثني." },
  { topic: "radaa", id: "3.12.2", q: "ما شروط الرضاع المحرّم؟", a: "1) أن يحصل خلال السنتين الأوليين من ولادة الطفل. 2) أن يصل اللبن إلى جوف الصغير على وجه اليقين." },
  { topic: "radaa", id: "3.12.3", q: "ما الفرق بين الحنفية والشافعية في مقدار الرضاع المحرّم؟ وما المختار للإفتاء؟", a: "الحنفية: ولو بقطرة. الشافعية: خمس رضعات متفرقات مشبعات. للإفتاء: قول الحنفية ابتداءً احتياطاً، وقول الشافعية بقاءً حفاظاً على الأسرة." },
  { topic: "radaa", id: "3.12.4", q: "ما المقصود بـ«لبن الفحل»؟ مع مثال.", a: "اللبن يُنسب لكل من المرضعة وللرجل الذي ثار اللبن بسببه. مثال: زوجتا فوزي — سامية أرضعت عمر، وخالدية أرضعت انتصار. تحرم انتصار على عمر لأنها صارت أخته بالرضاع من جهة الأب فوزي." },
  { topic: "radaa", id: "3.12.5", q: "اذكر ثلاثة من المستثنيات (التي لا تحرم بالرضاع).", a: "1) أم الأخ من الرضاع. 2) أخت الابن من الرضاع. 3) جدة الابن من الرضاع." },
  { topic: "radaa", id: "3.12.6", q: "اشرح: لماذا قد تكون الأخت بالرضاع لشخص ليست أختاً بالرضاع لأخيه؟", a: "لأن العبرة بمن رضع من المرأة. عمر رضع من امرأة فيصبح إخوانه بالرضاع كل من رضع منها أو ولدها. أخوه محمود لم يرضع، فبنات تلك المرأة أخوات لعمر فقط دون محمود." },
  { topic: "radaa", id: "3.12.7", q: "ما الآثار المترتبة على اكتشاف المحرمية بالرضاع بعد العقد قبل الدخول؟", a: "يفرّق القاضي بينهما، ولا مهر للمرأة، ولا نفقة، ولا سكنى." },
  { topic: "radaa", id: "3.12.8", q: "متى يكون الرجل أباً بالرضاع؟ ومتى لا يكون؟", a: "يكون أباً بالرضاع إذا كان زوج المرضعة وقت الرضاع وكان اللبن بسببه (لبن الفحل). لا يكون أباً بالرضاع إذا كان اللبن بسبب هرمونات لا حمل — تأخذ البنت حكم الربيبة بالنسبة له." },
  // التأقيت
  { topic: "temporary", id: "4.6.1", q: "اشرح قاعدة: إذا زال المانع عاد الممنوع مباحاً.", a: "في التحريم المؤقت، التحريم سببه مانع يزول. فإذا زال المانع (طلاق، انقضاء عدة، إسلام...) عاد الزواج مباحاً." },
  { topic: "temporary", id: "4.6.2", q: "بيّن قاعدة منع الجمع بين امرأتين مع الأمثلة.", a: "لا يجوز الجمع بين امرأتين إذا فُرضت إحداهما ذكراً حرم زواجه من الأخرى. أمثلة: الأختان، المرأة وعمتها، المرأة وخالتها، المرأة وبنت أخيها." },
  { topic: "temporary", id: "4.6.3", q: "متى تحل المطلقة ثلاثاً لزوجها الأول؟", a: "بعد زواج صحيح من زوج آخر، ودخول حقيقي، ثم فراق، ثم انتهاء عدتها — بلا اتفاق تحليل." },
  { topic: "temporary", id: "4.6.4", q: "ما حكم زواج التحليل؟", a: "محرم. ورد لعن المحلِّل والمحلَّل له، وسمي «التيس المستعار» في كلام الفقهاء." },
  { topic: "temporary", id: "4.6.5", q: "ما حكم الزواج من غير الكتابية؟", a: "محرم اتفاقاً. تزول الحرمة بإسلامها أو تحقق وصف الكتابية فيها." }
];

const examTopicLabel = {
  nasab: "النسب",
  musaharah: "المصاهرة",
  radaa: "الرضاع",
  temporary: "التأقيت"
};

let activeExamTopic = "all";

function renderComparisons() {
  const grid = document.querySelector("#compare-grid");
  if (!grid) return;
  grid.innerHTML = comparisons.map((table) => `
    <article class="compare-card">
      <header>
        <strong>${escapeXml(table.title)}</strong>
        <span>${escapeXml(table.subtitle)}</span>
      </header>
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr>${table.headers.map((h) => `<th>${escapeXml(h)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${table.rows.map((row) => `
              <tr class="m-${row.madhab}">${row.cells.map((cell) => `<td>${escapeXml(cell)}</td>`).join("")}</tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `).join("");
}

function renderExamQuestions() {
  const grid = document.querySelector("#exam-grid");
  if (!grid) return;
  const items = activeExamTopic === "all" ? examQuestions : examQuestions.filter((q) => q.topic === activeExamTopic);
  if (!items.length) {
    grid.innerHTML = `<p class="empty">لا أسئلة في هذا التصنيف.</p>`;
    return;
  }
  grid.innerHTML = items.map((item, index) => `
    <details class="exam-card" data-topic="${item.topic}">
      <summary>
        <span class="exam-tag">${escapeXml(examTopicLabel[item.topic])}</span>
        <span class="exam-id">سؤال ${escapeXml(item.id)}</span>
        <span class="exam-q">${escapeXml(item.q)}</span>
      </summary>
      <div class="exam-answer"><strong>الجواب:</strong> ${escapeXml(item.a)}</div>
    </details>
  `).join("");
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

document.querySelectorAll(".segment[data-family]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment[data-family]").forEach((segment) => segment.classList.remove("active"));
    button.classList.add("active");
    activeFamily = button.dataset.family;
    activeExample = 0;
    conditionInput.checked = true;
    renderExampleOptions();
    drawFamily();
  });
});

document.querySelectorAll(".segment[data-exam]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment[data-exam]").forEach((segment) => segment.classList.remove("active"));
    button.classList.add("active");
    activeExamTopic = button.dataset.exam;
    renderExamQuestions();
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
renderComparisons();
renderExamQuestions();
