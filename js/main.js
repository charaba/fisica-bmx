const piecesData = {
  banco: {
    title: "No Banco",
    image: "images/banco.png",
    textTitle: "O Ciclista",
brief: "No centro da prática do BMX está o ciclista, cuja técnica, preparo físico e entendimento das regras definem o desempenho e a segurança nas pistas e nas ruas.",
formula: "F = m·a  <br> F - Força Resultante <br> m - Massa <br> a - Aceleração",
explication: "Esta seção é dedicada à figura central do esporte: o ciclista. No BMX, diferentes modalidades — como o Street, Park, Flatland e Racing — exigem estilos de pilotagem distintos, cada uma com suas próprias regras e técnicas. O ciclista precisa dominar o equilíbrio, a impulsão e o controle do corpo para executar manobras com precisão, respeitando limites de segurança e regulamentações esportivas.\n\nFisicamente, o BMX demanda força explosiva, coordenação motora e tomada rápida de decisão. A interação entre corpo e bicicleta é guiada por princípios físicos como o impulso, a conservação do momento angular e o centro de massa. Por exemplo, a forma como o ciclista se inclina antes de um salto pode alterar completamente a trajetória e a rotação da bicicleta. \n\nAlém disso, o respeito às regras — como o uso de equipamentos obrigatórios e conduta esportiva — é fundamental tanto em competições oficiais quanto na prática recreativa. Este módulo oferece uma abordagem visual e interativa que revela como o domínio técnico e a compreensão das leis da física se unem na performance sobre duas rodas.",
    hasGame: true
  },
  freio: {
    title: "Freio",
    image: "images/freio.png",
    textTitle: "Controle e Atrito",
    brief: "O princípio central dos freios é o atrito, que é a força que se opõe ao movimento relativo entre duas superfícies em contato. No caso da bicicleta, quando acionamos o freio, as pastilhas de freio pressionam o aro ou o disco da roda, gerando atrito e diminuindo sua velocidade. Isso ocorre devido à transformação da energia cinética da bicicleta em energia térmica, dissipada no sistema de frenagem.",
    formula: "Fat = 𝜇 * N  <br> Fat - é a força de atrito que reduz a velocidade da roda <br> 𝜇 - é o coeficiente de atrito entre as pastilhas e o disco/aro <br> N - é a força perpendicular à superfície de contato",
    explication: "No BMX, o freio é crucial para manobras e controle do ciclista. Em modalidades como BMX Freestyle, o ciclista precisa dos freios para regular sua velocidade e preparar-se para saltos ou aterrissagens seguras. A força de atrito gerada pelos freios permite uma parada rápida, o que é essencial em terrenos irregulares ou em pistas cheias de obstáculos. Além disso, o coeficiente de atrito entre os freios e a roda pode influenciar a eficiência da frenagem: freios hidráulicos, por exemplo, têm um coeficiente maior, proporcionando uma resposta mais rápida."
  },
  guidao: {
    title: "Guidão",
    image: "images/guidao.png",
    textTitle: "Momento Angular",
    brief: "O guidão da bicicleta está diretamente relacionado ao conceito de torque e momento angular. Quando um ciclista aplica uma força ao guidão, ele cria um torque que pode alterar a direção da bicicleta. Além disso, em manobras como giros e saltos, o momento angular entra em jogo, permitindo que o ciclista gire o guidão no ar e estabilize sua posição ao aterrissar.",
    formula: "τ = F * d <br> τ - é o torque gerado <br> F - é a força aplicada no guidão <br> d - é a distância entre o ponto de aplicação de força e o eixo de rotação do guidão <br><br> L = I * ω <br> L - é o momento angular <br> I - é o momento de inércia do sistema <br> ω - é a velocidade angular",
    explication: "No BMX, o guidão não serve apenas para direcionar a bicicleta, mas também para executar manobras complexas, como o barspin (rotação do guidão enquanto o ciclista está no ar). Quando o ciclista gira o guidão, ele aplica torque, gerando um movimento rotacional. Para estabilizar esse movimento, ele pode ajustar sua posição corporal e redistribuir seu peso, influenciando o momento angular. Além disso, o controle da bicicleta em curvas depende da aplicação do torque no guidão, permitindo mudanças na trajetória sem comprometer o equilíbrio."
  },
  quadro: {
    title: "Quadro",
    image: "images/quadro.png",
    textTitle: "Rigidez e Centro de Massa",
    brief: "O quadro da bicicleta está diretamente relacionado aos conceitos de rigidez estrutural, centro de massa e distribuição de forças. Ele precisa ser leve para facilitar manobras, mas também resistente para suportar impactos durante saltos e aterrissagens. Além disso, a posição do centro de massa do ciclista em relação ao quadro influencia diretamente o equilíbrio e a estabilidade durante a pilotagem.",
    formula: "P = m * g <br> P - é a força peso que age sobre o quadro <br> m - é a massa do conjunto bicicleta + ciclista <br> g - é a aceleração da gravidade",
    explication: "No BMX, o quadro precisa ter um centro de massa bem posicionado para garantir que o ciclista possa executar manobras com controle. Um quadro mais curto permite mais agilidade, enquanto um quadro mais longo aumenta a estabilidade. Durante um salto, a posição do ciclista em relação ao quadro influencia a rotação no ar, pois o deslocamento do centro de massa altera o momento angular. Além disso, a rigidez estrutural do quadro garante que ele absorva impactos sem deformação excessiva, distribuindo a força ao longo da estrutura."
  },
  corrente: {
    title: "Corrente",
    image: "images/corrente.png",
    textTitle: "Transmissão de Energia",
    brief: "No sistema de transmissão da bicicleta, a energia muscular do ciclista é convertida em energia mecânica através dos pedais, corrente, coroa e pinhão. Esse processo segue o princípio da Lei da Conservação da Energia, onde a energia gerada não se perde, mas é transformada em diferentes formas (cinética, térmica, etc.).",
    formula: "P = F * v <br> P - é a potência mecânica gerada pelo ciclista <br> F - é a força aplicada no pedal <br> v - é a velocidade linear da bicicleta <br><br> Relação das Engrenagens <br> GR = D1 / D2 <br> GR - é a relação de engrenagens <br> D1 - é o número de dentes da maior engrenagem (coroa) <br> D2 - é o número de dentes da menor engrenagem (pinhão) <br> Ex: se a coroa tem 25 dentes e o pinhão tem 9, então: GR = 25 / 9 ≈ 2.78",
    explication: "No BMX, a relação de engrenagens afeta diretamente a aceleração e a velocidade máxima. Uma relação maior (coroa com mais dentes) exige mais força para pedalar, mas gera maior velocidade final. Já uma relação menor (coroa com menos dentes) facilita arrancadas rápidas, ideais para manobras. O ciclista escolhe a relação ideal dependendo do estilo de BMX: no freestyle, relações menores proporcionam mais controle; no race, relações maiores favorecem velocidades altas."
  },
  rodas: {
    title: "Rodas",
    image: "images/rodas.png",
    textTitle: "Atrito e Inércia",
    brief: "O atrito desempenha um papel crucial no contato das rodas com o solo. Existem dois tipos principais de atrito no BMX: atrito estático, que impede que a roda deslize quando está em movimento, e atrito dinâmico, que ocorre quando há derrapagem. Além disso, a inércia das rodas influencia a aceleração e a frenagem, enquanto a força normal atua perpendicularmente ao solo, influenciando a aderência.",
    formula: "Fat = 𝜇 * N <br> Fat - é a força de atrito <br> 𝜇 - é o coeficiente de atrito entre o pneu e o solo <br> N - é a força perpendicular exercida pelo peso da bicicleta e do ciclista <br><br> I = m * r² <br> I - é o momento de inércia da roda <br> m - é a massa da roda <br> r - é o raio da roda",
    explication: "No BMX, o atrito dos pneus com o solo afeta a aderência e a manobrabilidade. Pneus com maior superfície de contato aumentam o atrito, melhorando a estabilidade em curvas e aterrissagens. Em pistas de terra ou rampas, o coeficiente de atrito do solo influencia a tração da bicicleta—superfícies ásperas proporcionam maior aderência, enquanto superfícies lisas aumentam a velocidade. A inércia das rodas afeta a rapidez com que a bicicleta responde aos movimentos: rodas mais leves giram com menos resistência, permitindo maior controle sobre saltos e manobras."
  }
};

const modalitiesData = {
  racing: {
    title: "🏁 Racing",
    image: "images/racing.png",
    description: "O Racing é uma modalidade de corrida no BMX, onde o primeiro a cruzar a linha de chegada vence. Foi a segunda variação na origem do BMX, transformando o freestyle em uma competição focada em velocidade.",
    equipment: "• Capacete full face (proteção completa, incluindo queixo)\n• Calça e blusa de manga comprida\n• Opcional: sapatilha com clip para fixação no pedal",
    rules: "• Aplicação do fair play padrão das corridas\n• Evitar jogo de corpo com a bicicleta\n• Na largada, respeitar os sinais sonoros e visuais e aguardar a descida da barreira (gate)",
    competitions: "• Locais: competições municipais, estaduais e nacionais\n• Internacionais: Sul-americano, Pan-americano, Campeonato Mundial e Olimpíadas\n• Atletas de destaque: Guilherme Ribeiro; Deivlim (Turbo) Balthazar"
  },
  bowl: {
    title: "🥣 Bowl",
    image: "images/bowl.png",
    description: "O Bowl pertence ao Freestyle BMX, onde o atleta explora pistas em formato de tigela, combinando fluidez e amplitude em cada transição curva-paredão-curva.",
    equipment: "• Capacete básico ou half-shell\n• Joelheiras e cotoveleiras para proteger quedas laterais\n• Luvas para maior aderência",
    rules: "• Julgamento baseado em fluidez, amplitude dos voos e criatividade na linha de manobras\n• Penalizações por desequilíbrios exagerados ou quedas que interrompam a sequência\n• Tempo limite de apresentação, geralmente 45–60 s",
    competitions: "• Vans Pro Series; X Games; BMX Street Session Bowl\n• Atletas de destaque: Cauã Madona (Madona); Paulo Charaba"
  },
  park: {
    title: "🛹 Park",
    image: "images/park.png",
    description: "No Freestyle Park, os obstáculos (rampas, quarter pipes, spine ramps) são dispostos para criar linhas contínuas que incentivam combinação de manobras rápidas e graciosas.",
    equipment: "• Capacete essencial (half-shell)\n• Joelheira e cotoveleira\n• Óculos de proteção em pistas com partículas soltas",
    rules: "• Cada volta dura cerca de 1 min15 s; são permitidas 2–3 runs por atleta\n• Avaliação considera amplitude, dificuldade das manobras, fluidez e estilo\n• Dedução de pontos por interrupções ou uso excessivo de um único obstáculo",
    competitions: "• Sul-americano, Pan-americano, Mundial e Olimpíadas (Park BMX)\n• Atletas de destaque: José Maligno (atual campeão olímpico); Gustavo (BalaLoca); André Jesus"
  },
  street: {
    title: "🚧 street",
    image: "images/street.png",
    description: "No Street, os atletas usam cenários urbanos — escadas, corrimãos, bordas — como elementos para criar verdadeiros circuitos de manobras e truques criativos.",
    equipment: "• Capacete (half-shell ou full face, dependendo do obstáculo)\n• Joelheira e cotoveleira\n• Tênis de sola rígida para controlar o contato com os pedais",
    rules: "• Criatividade e diversidade de combos são critérios principais\n• Uso ético do espaço privado; proibição de danos ao patrimônio urbano\n• Penalidades por manobras que ofereçam risco extremo sem controle",
    competitions: "• X Games Street; FISE World Series; Red Bull District Ride\n• Atletas de destaque: Mario Chocolate; Kevin Peraza (vencedor do X Games)"
  },
  flatland: {
    title: "🎭 Flatland",
    image: "images/flatland.png",
    description: "Conhecido como o balé sobre duas rodas, o Flatland exige controle de equilíbrio e precisão em manobras estáticas e rotacionais, geralmente sem uso de freios.",
    equipment: "• Quadro customizado sem freio (para fluidez total)\n• Selim rebaixado e guidão gasto abaixo do padrão para manobras de pés no quadro",
    rules: "• Proibição de colocar o pé no chão durante a run\n• Avaliação por originalidade, complexidade e transição entre manobras\n• Runs de 60–90 s; até 3 runs por atleta",
    competitions: "• FISE Flatland; Auditorium Flatland Contest; Flatark\n• Atletas de destaque: Francisco Pekeno; Pedro Nascimento"
  },
  dirt: {
    title: "⛰️ Dirt Jump",
    image: "images/dirt.png",
    description: "Inspirado no motocross, o Dirt traz rampas de terra de até 4 m de altura, saltos longos e aterrissagens técnicas, focando em truques no ar.",
    equipment: "• Capacete full face\n• Joelheira, cotoveleira e luvas reforçadas\n• Óculos de proteção contra poeira",
    rules: "• Pontuação baseada em combinação de rotações, flips e estilo de aterrissagem\n• Sequência de 3–5 saltos; cada salto avaliado separadamente\n• Penalizações por quedas ou saídas de linha do circuito",
    competitions: "• Carapicuíba Monster Jump; Jump Festival; Red Bull Dirt Conquers\n• Atletas de destaque: Leandro Overall; Mike Moura"
  },
  vert: {
    title: "📐 Vert",
    image: "images/vert.png",
    description: "No Vert, pistas em formato de U (half-pipe) permitem que o atleta ganhe altura para executar manobras aéreas de grande amplitude.",
    equipment: "• Capacete full face\n• Joelheira, cotoveleira e protetores de pulso\n• Equipamento de corpo (colete leve) em Mega Rampa",
    rules: "• Julgamento por altura alcançada, amplitude das manobras e qualidade no pouso\n• Runs de 60 s; até 3 runs; o melhor score conta\n• Dedução por pousos instáveis ou perda de controle",
    competitions: "• X Games Vert; Pró Rad Brasil; Nitro World Games\n• Atletas de destaque: Matt Hoffman; Edmilson Pardal; Douglas Leite (Doguete)"
  }
};

const pieceCanvases = {};
const headerPieceName = document.getElementById('header-piece-name');
const pieces = document.querySelectorAll('.piece');

pieces.forEach(piece => {
  piece.style.pointerEvents = 'auto';
  const loadCanvas = () => {
    pieceCanvases[piece.id] = createOffscreenCanvas(piece);
  };
  piece.addEventListener('load', loadCanvas);
  if (piece.complete) loadCanvas();
});

function createOffscreenCanvas(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  canvas.getContext('2d').drawImage(img, 0, 0);
  return canvas;
}

function isVisiblePixel(img, canvas, e) {
  if (!canvas) return false;
  const rect = img.getBoundingClientRect();
  const scaleX = img.naturalWidth / rect.width;
  const scaleY = img.naturalHeight / rect.height;
  const x = Math.floor((e.clientX - rect.left) * scaleX);
  const y = Math.floor((e.clientY - rect.top) * scaleY);
  const pixel = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
  return pixel[3] > 0;
}

const container = document.getElementById("bike-container");
let lastHovered = null;

container.addEventListener("mousemove", e => {
  const allPieces = Array.from(pieces).reverse();
  let found = false;
  for (const piece of allPieces) {
    if (isVisiblePixel(piece, pieceCanvases[piece.id], e)) {
      if (lastHovered && lastHovered !== piece) lastHovered.classList.remove('hovered');
      piece.classList.add('hovered');
      const key = piece.getAttribute("data-piece");
      if (piecesData[key]) {
        headerPieceName.textContent = piecesData[key].title;
        headerPieceName.style.opacity = "1";
      }
      lastHovered = piece;
      found = true;
      break;
    }
  }
  if (!found && lastHovered) {
    lastHovered.classList.remove('hovered');
    headerPieceName.style.opacity = "0";
    lastHovered = null;
  }
});

container.addEventListener("mouseleave", () => {
  if (lastHovered) {
    lastHovered.classList.remove('hovered');
    headerPieceName.style.opacity = "0";
    lastHovered = null;
  }
});

container.addEventListener("click", e => {
  const allPieces = Array.from(pieces).reverse();
  for (const piece of allPieces) {
    if (isVisiblePixel(piece, pieceCanvases[piece.id], e)) {
      openDetail(piece.getAttribute("data-piece"), piece);
      break;
    }
  }
});

const detailOverlay = document.getElementById('detail-overlay'),
  detailTitle = document.getElementById('detail-title'),
  detailPieceImg = document.getElementById('detail-piece-img'),
  detailTextTitle = document.getElementById('detail-text-title'),
  detailTextBrief = document.getElementById('detail-text-brief'),
  detailTextFormula = document.getElementById('detail-text-formula'),
  detailTextExplication = document.getElementById('detail-text-explication'),
  backButton = document.getElementById('back-button'),
  startGameBtn = document.getElementById('start-game-btn'),
  goModalidadesBtn = document.getElementById('go-modalidades-btn');

let activePiece = null;

function openDetail(pieceKey, pieceElement) {
  activePiece = pieceKey;
  const data = piecesData[pieceKey];
  
  detailTitle.textContent = data.title;
  detailPieceImg.src = data.image;
  detailPieceImg.alt = data.title;
  detailTextTitle.textContent = data.textTitle;
  detailTextBrief.textContent = data.brief;
  detailTextFormula.innerHTML = data.formula.replace(/\n/g, "<br>");
  detailTextExplication.textContent = data.explication;
  
  startGameBtn.style.display = data.hasGame ? "inline-block" : "none";
  goModalidadesBtn.style.display = (pieceKey === "banco") ? "inline-block" : "none";
  
  detailOverlay.classList.remove('hidden');
  detailOverlay.classList.add('visible');
  
  animatePieceToDetail(pieceElement, () => {
    detailPieceImg.style.visibility = 'visible';
    backButton.style.opacity = '1';
  });
}

function closeDetail() {
  activePiece = null;
  backButton.style.opacity = '0';
  detailOverlay.classList.remove('visible');
  setTimeout(() => detailOverlay.classList.add('hidden'), 500);
}

backButton.addEventListener('click', closeDetail);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && detailOverlay.classList.contains('visible')) {
    closeDetail();
  }
});

function animatePieceToDetail(pieceElement, callback) {
  const startRect = pieceElement.getBoundingClientRect(),
        destRect = detailPieceImg.getBoundingClientRect(),
        clone = pieceElement.cloneNode(true);
        
  clone.style.position = 'fixed';
  clone.style.top = startRect.top + 'px';
  clone.style.left = startRect.left + 'px';
  clone.style.width = startRect.width + 'px';
  clone.style.height = startRect.height + 'px';
  clone.style.transition = 'all 0.5s ease';
  clone.style.zIndex = '300';
  
  document.body.appendChild(clone);
  detailPieceImg.style.visibility = 'hidden';
  
  requestAnimationFrame(() => {
    clone.style.top = destRect.top + 'px';
    clone.style.left = destRect.left + 'px';
    clone.style.width = destRect.width + 'px';
    clone.style.height = destRect.height + 'px';
  });
  
  clone.addEventListener('transitionend', () => {
    callback();
    document.body.removeChild(clone);
  }, { once: true });
}

startGameBtn.addEventListener('click', () => {
  closeDetail();
  const minigameOverlay = document.getElementById('minigame-overlay');
  minigameOverlay.classList.add('visible');
  minigameOverlay.classList.remove('hidden');
  if (typeof startSimulation === 'function') {
    startSimulation();
  } else {
    console.error("startSimulation() não está definido!");
  }
});

goModalidadesBtn.addEventListener('click', () => {
  closeDetail();
  const bikeContainer = document.getElementById('bike-container');
  bikeContainer.style.transition = "transform 0.8s ease";
  void bikeContainer.offsetWidth;
  bikeContainer.style.transform = "translateX(150%)";
  setTimeout(() => {
    const modalidadesOverlay = document.getElementById('modalidades-overlay');
    modalidadesOverlay.classList.add('visible');
    modalidadesOverlay.classList.remove('hidden');
  }, 800);
});

const modalidadesOverlay = document.getElementById('modalidades-overlay');
const modalidadesBackButton = document.getElementById('modalidades-back-button');

modalidadesBackButton.addEventListener('click', returnFromModalidades);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (modDetailOverlay.classList.contains('visible')) {
      closeModalityDetail();
    } else if (modalidadesOverlay.classList.contains('visible')) {
      returnFromModalidades();
    }
  }
});

const modDetailOverlay = document.getElementById('modality-detail-overlay');
modDetailOverlay.addEventListener('click', e => {
  if(e.target === modDetailOverlay) {
    closeModalityDetail();
  }
});

function returnFromModalidades() {
  const modalidadesOverlay = document.getElementById('modalidades-overlay');
  modalidadesOverlay.classList.remove('visible');
  setTimeout(() => modalidadesOverlay.classList.add('hidden'), 800);

  const bikeContainer = document.getElementById('bike-container');
  bikeContainer.style.transition = "none";
  bikeContainer.style.transform = "translateX(-100%)";
  void bikeContainer.offsetWidth;
  bikeContainer.style.transition = "transform 0.8s ease";
  bikeContainer.style.transform = "translateX(0%)";
}

const cards = document.querySelectorAll("#modalities-carousel .card");
cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalityKey = card.getAttribute('data-modality');
    openModalityDetail(modalityKey);
  });
});

const modDetailBackButton = document.getElementById('mod-detail-back-button'),
      modDetailTitle = document.getElementById('modality-detail-title'),
      modDetailImg = document.getElementById('modality-detail-img'),
      modDetailDescription = document.getElementById('modality-detail-description'),
      modDetailEquipment = document.getElementById('modality-detail-equipment'),
      modDetailRules = document.getElementById('modality-detail-rules'),
      modDetailCompetitions = document.getElementById('modality-detail-competitions');

      function openModalityDetail(modalityKey) {
        const data = modalitiesData[modalityKey];
        if (!data) return;
      
        modDetailTitle.textContent = data.title;
        modDetailImg.src = data.image;
        modDetailImg.alt = data.title;
        modDetailDescription.textContent = data.description;
      
        modDetailEquipment.innerHTML = `<span style="color:#FFA500;font-weight:bold;">📌 Equipamento:</span><br>` +
          data.equipment.replace(/\n/g, "<br>");
      
        modDetailRules.innerHTML = `<span style="color:#FFA500;font-weight:bold;">⚖️ Regras:</span><br>` +
          data.rules.replace(/\n/g, "<br>");
      
        modDetailCompetitions.innerHTML = `<span style="color:#FFA500;font-weight:bold;">🏆 Competições e Atletas:</span><br>` +
          data.competitions
            .replace(/(Locais:|Internacionais:|Atletas de destaque:)/g, `<span style="color:#FFA500;font-weight:bold;">$1</span>`)
            .replace(/\n/g, "<br>");
      
      
        modDetailOverlay.classList.remove('hidden');
        modDetailOverlay.classList.add('visible');
      }

function closeModalityDetail() {
  modDetailOverlay.classList.remove('visible');
  setTimeout(() => modDetailOverlay.classList.add('hidden'), 500);
}

modDetailBackButton.addEventListener('click', closeModalityDetail);

const hoverPhysics = document.getElementById("hover-physics");
const tooltip      = document.getElementById("tooltip");

hoverPhysics.addEventListener("mouseenter", () => {
  tooltip.textContent = "Fernando Física";
  tooltip.style.display = "block";
});
hoverPhysics.addEventListener("mousemove", e => {
  tooltip.style.left = (e.pageX + 10) + "px";
  tooltip.style.top  = (e.pageY + 10) + "px";
});
hoverPhysics.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});

const videoOverlay   = document.getElementById("video-overlay");
const fernandoVideo  = document.getElementById("fernando-video");
let isFirstPlayback  = true;

hoverPhysics.addEventListener("click", () => {
  if (isFirstPlayback) {
    fernandoVideo.src = "images/Fernando.mp4";
    isFirstPlayback = false;
  } else {
    const opções = [
      "images/Fernando.mp4",
      "images/Fernando2.mp4",
      "images/Fernando3.mp4"
    ];
    const idx = Math.floor(Math.random() * opções.length);
    fernandoVideo.src = opções[idx];
  }
  videoOverlay.style.display = "flex";
  fernandoVideo.currentTime = 0;
  fernandoVideo.play();
});

fernandoVideo.addEventListener("ended", () => {
  fernandoVideo.pause();
  videoOverlay.style.display = "none";
});
