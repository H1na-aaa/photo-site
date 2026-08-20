// 各ページ
const pages = {
  home: {
    title: "ようこそ写真展へ",
    background: "image/index.webp",
    bgm: "bgm/Le-Musee.mp3",

    items: [
      {
        page: "sea",
        text: "波の音に耳を傾ける",
        image: "image/sea/DSCF3002.webp",
        href: "sea.html"
      },
      {
        page: "aquarium",
        text: "涼しい水の中へ潜る",
        image: "image/aquarium/DSCF1387.webp",
        href: "aquarium.html"
      },
      {
        page: "flower",
        text: "花の香りがするほうへ\n足を運ぶ",
        image: "image/flower/DSCF1951.webp",
        href: "flower.html"
      },
      {
        page: "ruins",
        text: "静かな場所を歩く",
        image: "image/ruins/DSCF2173.webp",
        href: "ruins.html"
      },
      {
        page: "town",
        text: "明るい街へ向かう",
        image: "image/town/DSCF1656.webp",
        href: "town.html"
      },
      {
        page: "sky",
        text: "輝く空を見上げる",
        image: "image/sky/DSCF3593.webp",
        href: "sky.html"
      },
      {
        page: "snow",
        text: "銀世界を彷徨う",
        image: "image/snow/DSCF0845.webp",
        href: "snow.html"
      },
      {
        page: "cafe",
        text: "コーヒーを飲みながら\n休憩する",
        image: "image/cafe/DSCF0039.webp",
        href: "cafe.html"
      },
    ]
  },
  

sea: {
  title: "波の音に耳を傾ける",
  background: "image/sea.webp",
  overlay: "image/sea/haikeioversea.png",
  bgm: "bgm/aozoratojessica.mp3",

  photos: [
    {
      src: "image/sea/DSCF1127.webp",
      title: "海岸",
      text: "伊良湖岬の海\n大きな岩の上で眺めていたい"
    },
    {
      src: "image/sea/DSCF1159.webp",
      title: "海に続く道",
      text: "伊良湖岬の海の近くのカフェからの道\nなんだかワクワクする"
    },
    {
      src: "image/sea/DSCF1195.webp",
      title: "屋上から",
      text: "伊良湖岬の温泉の屋上\n寂しいような落ち着くような不思議な場所"
    },
    {
      src: "image/sea/DSCF1297.webp",
      title: "駅",
      text: "海芝浦駅\n駅の目の前が海、少し非現実的"
    },
    {
      src: "image/sea/DSCF2695.webp",
      title: "道の先",
      text: "蒲郡、西浦周辺\n青春の代名詞みたいな景色"
    },
    {
      src: "image/sea/DSCF2701.webp",
      title: "駐車禁止",
      text: "青い空と青い海に標識の赤がコントラスト"
    },
    {
      src: "image/sea/IMG_2778.webp",
      title: "一歩",
      text: "西浦パームビーチ\n暑い日にはちょっとだけ海に入りたい"
    },
    {
      src: "image/sea/DSCF2992.webp",
      title: "揺れる",
      text: "国際両備フェリー\n波に揺られてブランコに揺られる"
    },
    {
      src: "image/sea/DSCF3002.webp",
      title: "遠くへ",
      text: "国際両備フェリー\n目的地までのんびりしたい"
    },
    {
      src: "image/sea/DSCF3117.webp",
      title: "一時間目",
      text: "二十四の瞳映画村\n海風にあたりながら授業、お昼寝しちゃうね"
    },
    {
      src: "image/sea/DSCF3425.webp",
      title: "柵",
      text: "四国水族館の裏道\nちょっと秘密基地みたい"
    },
    {
      src: "image/sea/DSCF3472.webp",
      title: "向こうへ",
      text: "瀬戸大橋\nこれまで何人の人を運んだんだろう"
    }
  ]
},
aquarium: {
  title: "涼しい水の中へ潜る",
  background: "image/aquarium.webp",
  overlay: "image/aquarium/haikeiover.png",
  bgm: "bgm/nemurukurage.mp3",

  photos: [
    {
      src: "image/aquarium/DSCF0361.webp",
      title: "なかよし",
      text: "ニフレルにいたペンギンたち\n仲良しなのかな"
    },
    {
      src: "image/aquarium/DSCF1387.webp",
      title: "きらきら",
      text: "すみだ水族館\n上から見られるなんて新鮮"
    },
    {
      src: "image/aquarium/DSCF1395.webp",
      title: "ゆらゆら",
      text: "すみだ水族館\n横から見てもきれいだね"
    },
    {
      src: "image/aquarium/DSCF1452.webp",
      title: "ふわふわ",
      text: "すみだ水族館\n近くで見ると模様がよく見える"
    },
    {
      src: "image/aquarium/DSCF1470.webp",
      title: "水槽",
      text: "すみだ水族館\n大きい水槽が並んでると、なんだか涼し気"
    },
    {
      src: "image/aquarium/DSCF1490.webp",
      title: "金魚",
      text: "すみだ水族館\n鮮やかで優雅"
    },
    {
      src: "image/aquarium/DSCF1524.webp",
      title: "屋台",
      text: "すみだ水族館\n屋台みたいな展示、お祭りみたい"
    },
    {
      src: "image/aquarium/DSCF1528.webp",
      title: "ひとり",
      text: "すみだ水族館\n赤ちゃんのクラゲ、これから大きくなるのかな"
    },
    {
      src: "image/aquarium/DSCF1602.webp",
      title: "泡",
      text: "すみだ水族館\n気が付いたら大水槽で立ち止まっている…"
    },
    {
      src: "image/aquarium/DSCF3298.webp",
      title: "水色",
      text: "四国水族館\n明るい水色に見惚れてしまう"
    },
    {
      src: "image/aquarium/DSCF3328.webp",
      title: "陽の光",
      text: "四国水族館\n暗い水と明るい光のコントラスト"
    },
    {
      src: "image/aquarium/DSCF3353.webp",
      title: "青い光",
      text: "四国水族館\n人工的な光と水槽の中の自然"
    },
    {
      src: "image/aquarium/DSCF3362.webp",
      title: "円柱水槽",
      text: "四国水族館\n円柱水槽ってちょっと近未来的？"
    }
  ]
},


flower: {
  title: "花の香りがするほうへ\n足を運ぶ",
  background: "image/flower.webp",
  overlay: "image/flower/haikeiover.png",
  bgm: "bgm/PerituneMaterial_Pastorale_loop.mp3",

  photos: [
    {
      src: "image/flower/DSCF1753.webp",
      title: "春",
      text: "桜\n春の訪れ"
    },
    {
      src: "image/flower/DSCF1951.webp",
      title: "青",
      text: "ネモフィラ\n一面真っ青、海みたい"
    },
    {
      src: "image/flower/DSCF2000.webp",
      title: "花壇",
      text: "勿忘草\nすっごく小さい"
    },
    {
      src: "image/flower/DSCF2002.webp",
      title: "ひらひら",
      text: "パンジー\n薄紫のひらひらってかわいい"
    },
    {
      src: "image/flower/DSCF2004.webp",
      title: "お姫様",
      text: "パンジー\nお姫様のスカートみたい"
    },
    {
      src: "image/flower/DSCF2011.webp",
      title: "ゆめかわ",
      text: "パンジー\n水色と薄紫、まさにゆめかわ"
    },
    {
      src: "image/flower/DSCF2020.webp",
      title: "ひとやすみ",
      text: "名城公園\n花に囲まれてひとやすみしよう"
    },
    {
      src: "image/flower/IMG_5140.webp",
      title: "お気に入りの一枚",
      text: "綺麗な花、どんなふうに撮ろうかな？"
    },
    {
      src: "image/flower/DSCF2042.webp",
      title: "お届け物",
      text: "自転車で運ばれるネモフィラ、どこに行くの？"
    },
    {
      src: "image/flower/DSCF2051.webp",
      title: "郵便",
      text: "真っ青な世界に赤いポストが一つ\n何を届けよう"
    },
    {
      src: "image/flower/DSCF2070.webp",
      title: "水飲み",
      text: "花の隙間からこっちを見てる？仲良しみたいだね"
    },
    {
      src: "image/flower/DSCF2150.webp",
      title: "秘密基地",
      text: "カラフルなお花の中に白い建物、秘密基地みたい"
    },
    {
      src: "image/flower/DSCF2850.webp",
      title: "花束",
      text: "きれいなのにちょっとだけ不気味な気がする"
    },
    {
      src: "image/flower/DSCF2852.webp",
      title: "花冠",
      text: "花冠を作ってあの子にプレゼントしよう"
    },
    {
      src: "image/flower/DSCF3704.webp",
      title: "雨あがり",
      text: "梅雨を知らせるアジサイが鮮やかに咲いている"
    }
  ]
},


ruins: {
  title: "静かな場所を歩く",
  background: "image/town.webp",
  overlay: "image/ruins/haikeiover.png",
  bgm: "bgm/ametoazisai.mp3",

  photos: [
    {
      src: "image/ruins/DSCF1276.webp",
      title: "トンネルの先",
      text: "国道駅\nこんなところに駅があるんだね"
    },
    {
      src: "image/ruins/DSCF1279.webp",
      title: "裏口",
      text: "国道駅\nここから入って大丈夫？"
    },
    {
      src: "image/ruins/DSCF2161.webp",
      title: "放課後",
      text: "一輪車、君は乗れた？"
    },
    {
      src: "image/ruins/DSCF2165.webp",
      title: "草",
      text: "だんだん人工物が自然に戻っていくね"
    },
    {
      src: "image/ruins/DSCF2166.webp",
      title: "真っ白",
      text: "古い建物でもまだまだ白が綺麗"
    },
    {
      src: "image/ruins/DSCF2172.webp",
      title: "手洗い場",
      text: "まだこの水道って使えるのかな？"
    },
    {
      src: "image/ruins/DSCF2173.webp",
      title: "二階",
      text: "二階は何があるんだろう"
    },
    {
      src: "image/ruins/DSCF2176.webp",
      title: "廃墟",
      text: "コンクリートの建物ってロマンがある"
    },
    {
      src: "image/ruins/DSCF2216.webp",
      title: "電車待ち",
      text: "母野駅\n次の電車は何時だろう"
    },
    {
      src: "image/ruins/DSCF2223.webp",
      title: "雨宿り",
      text: "母野駅\n屋根があると安心"
    },
    {
      src: "image/ruins/DSCF2309.webp",
      title: "雪解け",
      text: "雪の降ってないスキー場ってちょっと新鮮"
    },
    {
      src: "image/ruins/DSCF2505.webp",
      title: "小さな橋",
      text: "この先に秘密基地とかあったりしないかな？"
    },
    {
      src: "image/ruins/DSCF2537.webp",
      title: "迷子",
      text: "同じような道が続いていたら迷子になっちゃいそう"
    },
    {
      src: "image/ruins/DSCF2553.webp",
      title: "滝",
      text: "滝の周りはちょっとだけ他よりも涼しい"
    },
    {
      src: "image/ruins/DSCF2592.webp",
      title: "人工物",
      text: "ぐらぐらしてちょっと不安な足場、たぶん大丈夫"
    },
    {
      src: "image/ruins/DSCF2711.webp",
      title: "海へ続く街",
      text: "今は営業していないお店が多いみたい\n何の場所だったんだろうね"
    },
    {
      src: "image/ruins/DSCF2714.webp",
      title: "夏休み",
      text: "ゲームみたいな夏休みの一幕"
    },
    {
      src: "image/ruins/DSCF2716.webp",
      title: "みどり",
      text: "忘れ去られたみたいでちょっとだけ寂しい\nきっとこのおうちもゆっくり休めてる"
    },
    {
      src: "image/ruins/DSCF2738.webp",
      title: "バス待ち",
      text: "小さな町のバス停\nバスの時間は確認した？"
    }
  ]
},


town: {
  title: "明るい街へ向かう",
  background: "image/town.webp",
  overlay: "image/town/haikeiover.png",
  bgm: "bgm/Raindrop.mp3",

  // 町だけ横方向のオーバーレイ
  overlayHorizontal: true,

  photos: [
    {
      src: "image/town/DSCF0398.webp",
      title: "イルミネーション",
      text: "夜って一番暗いけど一番明るい"
    },
    {
      src: "image/town/DSCF0455.webp",
      title: "裏路地",
      text: "ちょっとだけ生活が見える"
    },
    {
      src: "image/town/DSCF0760.webp",
      title: "橋の上から",
      text: "この先に明るい街が待ってるよ"
    },
    {
      src: "image/town/DSCF0781.webp",
      title: "温泉街",
      text: "オレンジの光が暖かい"
    },
    {
      src: "image/town/DSCF0793.webp",
      title: "暖かい",
      text: "寒い日の夜に見つけたら吸い込まれていく"
    },
    {
      src: "image/town/DSCF0834.webp",
      title: "和",
      text: "昔ながらの街並み、なんだか落ち着く"
    },
    {
      src: "image/town/DSCF1656.webp",
      title: "東京",
      text: "東京の夜は明るい、みんな夜更かしだね"
    },
    {
      src: "image/town/DSCF1702.webp",
      title: "駅舎",
      text: "東京駅\n近代的な建物が多いから少しだけ異質に見える"
    },
    {
      src: "image/town/DSCF3676.webp",
      title: "ホラーゲーム",
      text: "異世界に迷い込んじゃったみたい\n振り向かないで…"
    }
  ]
},


sky: {
  title: "輝く空を見上げる",
  background: "image/sky.webp",
  overlay: "image/sky/haikeiover.png",
  bgm: "bgm/M180 Break Time.mp3",

  photos: [
    {
      src: "image/sky/DSCF0718.webp",
      title: "花火",
      text: "一瞬の光を永遠の思い出にしたい"
    },
    {
      src: "image/sky/DSCF3516.webp",
      title: "村",
      text: "根羽村\n山頂から見る星は格別"
    },
    {
      src: "image/sky/DSCF3543.webp",
      title: "夜更け",
      text: "だいぶ暗くなって星がきれいに見える"
    },
    {
      src: "image/sky/DSCF3518.webp",
      title: "木々の隙間",
      text: "木の間から見える星々が輝いている"
    },
    {
      src: "image/sky/DSCF3593.webp",
      title: "天の川",
      text: "こんなに大きな川だと織姫様と彦星様もちょっと寂しいね"
    }
  ]
},


snow: {
  title: "銀世界を彷徨う",
  background: "image/snow.webp",
  overlay: "image/snow/haikeiover.png",
  bgm: "bgm/awayukimura.mp3",


  photos: [
    {
      src: "image/snow/DSCF0173.webp",
      title: "手すり",
      text: "誰も触っていない綺麗な雪"
    },
    {
      src: "image/snow/DSCF0176.webp",
      title: "紅葉",
      text: "雪の中でも落ちない強い子"
    },
    {
      src: "image/snow/DSCF0197.webp",
      title: "赤い実",
      text: "メリークリスマス！"
    },
    {
      src: "image/snow/DSCF0206.webp",
      title: "踏切",
      text: "雪が降っても踏切はお仕事中…"
    },
    {
      src: "image/snow/DSCF0210.webp",
      title: "山の上",
      text: "雪山からの景色は格別"
    },
    {
      src: "image/snow/DSCF0845.webp",
      title: "おでかけ",
      text: "雪でもわんちゃんは元気いっぱい"
    }
  ]
},


cafe: {
  title: "コーヒーを飲みながら\n休憩する",
  background: "image/cafe.webp",
  overlay: "image/cafe/haikeiover.png",
  bgm: "bgm/loficafe.mp3",

  photos: [
    {
      src: "image/cafe/DSCF0039.webp",
      title: "焼きたてをどうぞ",
      text: "西原珈琲店\n喫茶店のサンドイッチってなんでこんなにおいしいんだろう"
    },
    {
      src: "image/cafe/DSCF1678.webp",
      title: "フレンチトースト",
      text: "THE FRONT ROOM\n大人な空間と大人な時間…？"
    },
    {
      src: "image/cafe/DSCF2723.webp",
      title: "海とクリームソーダ",
      text: "温泉喫茶si no no me\nカラフルなクリームソーダが夏を感じさせてくれる"
    },
    {
      src: "image/cafe/DSCF2918.webp",
      title: "甘いハート",
      text: "twilight coffee\n甘くてかわいいハート、飲むのもったいない気がしちゃう"
    },
    {
      src: "image/cafe/DSCF3613.webp",
      title: "喫茶店のクリームソーダ",
      text: "喫茶ジェラシー\nかたいプリンとクリームソーダ"
    },
    {
      src: "image/cafe/image0 (1).webp",
      title: "街の一角",
      text: "SCENE\n白黒で大人っぽくてかっこいい空間…"
    },
    {
      src: "image/cafe/DSCF3768.webp",
      title: "夜の秘密基地",
      text: "A&a café\n今日はちょっとだけ夜更かししちゃおう"
    }
  ]
}
};

// トップ用
function renderHome() {
  const backHomeButton =
  document.getElementById("back-home-button");

  const page = pages.home;

  changePageBgm(page);

  const pageTitle = document.getElementById("page-title");
  const bodyBg = document.getElementById("body-bg");
  const galleryTrack = document.getElementById("gallery-track");

    // ★ 最初に展示室のオーバーレイを完全解除
  resetOverlay();


  pageTitle.textContent = page.title;
  bodyBg.src = page.background;

  if (!pageTitle || !bodyBg || !galleryTrack) {
    return;
  }

  backHomeButton.style.display = "none";

  pageTitle.textContent = page.title;
  bodyBg.src = page.background;

  galleryTrack.innerHTML = "";

  page.items.forEach(item => {
    const link = document.createElement("a");

    link.className = "img-wrap c-bnr bg photo";
    link.href = `#${item.page}`;
    link.addEventListener("click", event => {
     event.preventDefault();

      const pageName = item.page;

      location.hash = pageName;
    });
    link.dataset.page = item.page;
    link.dataset.text = item.text;

    const img = document.createElement("img");

    img.src = item.image;
    img.alt = "";

    link.appendChild(img);
    galleryTrack.appendChild(link);
  });
  initGallery();
  initPopup();
}
//　展示サイト
function renderGalleryPage(pageName) {

  const page = pages[pageName];

  changePageBgm(page);

  const pageTitle =
    document.getElementById("page-title");

  const bodyBg =
    document.getElementById("body-bg");

  const overlay =
    document.getElementById("overlay");

  const galleryTrack =
    document.getElementById("gallery-track");

  const backHomeButton =
    document.getElementById("back-home-button");


  if (
    !page ||
    !pageTitle ||
    !bodyBg ||
    !overlay ||
    !galleryTrack ||
    !backHomeButton
  ) {
    return;
  }


  backHomeButton.style.display = "";


  // タイトル
  pageTitle.textContent = page.title;


  // 背景
  bodyBg.src = page.background;


  // 前ページのオーバーレイを解除
  resetOverlay();


  // 現在のページのオーバーレイ
  if (page.overlay) {
    overlay.style.backgroundImage =
      `url("${page.overlay}")`;
  }


  // 町だけ横方向
  if (page.overlayHorizontal) {
    overlay.classList.add(
      "overlay-horizontal"
    );
  }


  // 古い写真を削除
  galleryTrack.innerHTML = "";


  // 写真生成
  page.photos.forEach(photo => {

    const img =
      document.createElement("img");

    img.className =
      "img-wrap-square square popup-trigger photo";

    img.src = photo.src;

    img.dataset.title =
      photo.title;

    img.dataset.text =
      photo.text;

    galleryTrack.appendChild(img);

  });


  // 新しいギャラリーとして取得
  initGallery();
  initPopup();
}

// オーバーレイのスクロール

window.addEventListener(
  "scroll",
  () => {

    const overlay =
      document.getElementById("overlay");

    if (!overlay) {
      return;
    }


    const offset =
      window.scrollY * 0.5;


    if (
      overlay.classList.contains(
        "overlay-horizontal"
      )
    ) {

      overlay.style.backgroundPosition =
        `${offset}px center`;

    } else {

      overlay.style.backgroundPosition =
        `center ${offset}px`;

    }

  },
  { passive: true }
);
//　海を表示
function loadPageFromHash() {
  const pageName =
    location.hash.replace("#", "") || "home";

  if (pageName === "home") {
    renderHome();
    return;
  }

  if (pages[pageName]) {
    renderGalleryPage(pageName);
    return;
  }

  renderHome();
}
window.addEventListener("hashchange", loadPageFromHash);
// ページ高さ計算

function updatePageHeight() {

  const track =
    document.querySelector(".track");

  if (!track) {
    return;
  }


  /*
    スマホでは通常のページ高さを使用
  */

  if (
    window.matchMedia("(max-width: 767px)").matches
  ) {

    document.documentElement.style.removeProperty(
      "--page-height"
    );

    return;
  }


  const lastItem =
    track.lastElementChild;

  if (!lastItem) {
    return;
  }


  const pageHeight =
    lastItem.offsetLeft +
    lastItem.offsetWidth -
    window.innerWidth / 2 +
    lastItem.offsetWidth / 2 +
    window.innerHeight;


  document.documentElement.style.setProperty(
    "--page-height",
    `${pageHeight}px`
  );
}

window.addEventListener(
  "resize",
  () => {
    refreshGalleryElements();
    updatePageHeight();
  }
);

// オーバーレイのスクロール速度低下
function resetOverlay() {
  const overlay = document.getElementById("overlay");

  if (!overlay) {
    return;
  }

  overlay.style.backgroundImage = "none";
  overlay.style.backgroundPosition = "center top";
  overlay.style.transform = "none";

  overlay.classList.remove("overlay-horizontal");
}

// ポップアップ要素取得
const popup =
  document.getElementById("popup");

const popupImage =
  document.getElementById("popup-image");

const popupTitle =
  document.getElementById("popup-title");

const popupDescription =
  document.getElementById("popup-description");

const popupClose =
  document.getElementById("popup-close");

const popupPrev =
  document.getElementById("popup-prev");

const popupNext =
  document.getElementById("popup-next");

const popupSwipeArea =
  document.getElementById("popup-swipe-area");

//　ポップアップへ写真を表示
function showPopupPhoto(index, syncGallery = true) {

  if (popupTriggers.length === 0) {
    return;
  }


  /*
    最後→最初
    最初→最後

    を可能にする
  */
  currentPhotoIndex =
    (index + popupTriggers.length) %
    popupTriggers.length;


  const photo =
    popupTriggers[currentPhotoIndex];


  popupImage.src =
    photo.src;

  popupImage.alt =
    photo.dataset.title || "";

  popupTitle.textContent =
    photo.dataset.title || "";

  popupDescription.textContent =
    photo.dataset.text || "";


  /*
    矢印・スワイプで変更した場合は
    後ろのギャラリーも動かす
  */
  if (syncGallery) {
    moveGalleryToPhoto(currentPhotoIndex);
  }
}
//　開く
document.addEventListener("click", event => {

  const trigger =
    event.target.closest(".popup-trigger");

  if (!trigger) {
    return;
  }


  const index =
    popupTriggers.indexOf(trigger);

  if (index === -1) {
    return;
  }


  currentPhotoIndex = index;

  /*
    クリックした時点で
    背後もその写真なので同期不要
  */
  showPopupPhoto(
    currentPhotoIndex,
    false
  );

  popup.classList.add("active");

  document.body.classList.add(
    "popup-open"
  );
});

//　前後へ移動
function showPreviousPhoto() {
  showPopupPhoto(
    currentPhotoIndex - 1
  );
}


function showNextPhoto() {
  showPopupPhoto(
    currentPhotoIndex + 1
  );
}

popupPrev.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    showPreviousPhoto();
  }
);


popupNext.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    showNextPhoto();
  }
);

document.addEventListener(
  "keydown",
  event => {

    if (
      !popup.classList.contains("active")
    ) {
      return;
    }


    if (event.key === "ArrowLeft") {
      showPreviousPhoto();
    }


    if (event.key === "ArrowRight") {
      showNextPhoto();
    }


    if (event.key === "Escape") {
      closePopup();
    }
  }
);

// ===== ポップアップ全体のスワイプ =====
// ×ボタン以外ならポップアップ全体で判定

popup.addEventListener(
  "touchstart",
  event => {

    // ×ボタンを触った場合はスワイプ判定しない
    if (event.target.closest(".close-btn")) {
      return;
    }

    const touch = event.changedTouches[0];

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;

    touchEndX = touchStartX;
    touchEndY = touchStartY;
  },
  { passive: true }
);


popup.addEventListener(
  "touchmove",
  event => {

    // ×ボタンを触っている場合は何もしない
    if (event.target.closest(".close-btn")) {
      return;
    }

    const touch = event.changedTouches[0];

    touchEndX = touch.clientX;
    touchEndY = touch.clientY;
  },
  { passive: true }
);


popup.addEventListener(
  "touchend",
  event => {

    // ×ボタンを触った場合はスワイプ判定しない
    if (event.target.closest(".close-btn")) {
      return;
    }

    const differenceX =
      touchEndX - touchStartX;

    const differenceY =
      touchEndY - touchStartY;


    // 横方向への移動が大きい場合だけ判定
    const isHorizontal =
      Math.abs(differenceX) >
      Math.abs(differenceY);


    // 50px未満なら無視
    if (
      !isHorizontal ||
      Math.abs(differenceX) < 50
    ) {
      return;
    }


    // 左スワイプ → 次の写真
    if (differenceX < 0) {

      showNextPhoto();

    } else {

      // 右スワイプ → 前の写真
      showPreviousPhoto();

    }
  },
  { passive: true }
);

//　閉じる
function closePopup() {

  popup.classList.remove("active");

  document.body.classList.remove(
    "popup-open"
  );
}


popupClose.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    closePopup();
  }
);

popup.addEventListener(
  "click",
  event => {

    if (event.target === popup) {
      closePopup();
    }
  }
);

//　同期
function moveGalleryToPhoto(index) {

  if (
    !galleryTrack ||
    galleryImages.length === 0
  ) {
    return;
  }


  const photo =
    galleryImages[index];

  if (!photo) {
    return;
  }


  /*
    ===== スマホ =====
  */

  if (
    window.matchMedia(
      "(max-width: 767px)"
    ).matches
  ) {

    const rect =
      photo.getBoundingClientRect();


    const destination =
      window.scrollY +
      rect.top -
      window.innerHeight / 2 +
      rect.height / 2;


    window.scrollTo({
      top: destination,
      behavior: "smooth"
    });


    return;
  }


  /*
    ===== PC =====
  */

  const firstImage =
    galleryImages[0];

  const imageWidth =
    firstImage.offsetWidth;

  const gap =
    parseFloat(
      getComputedStyle(galleryTrack).gap
    ) || 0;


  const itemWidth =
    imageWidth + gap;


  const destination =
    index * itemWidth;


  /*
    横スクロールの目標地点も変更
  */
  target = destination;


  /*
    実際の縦スクロール位置も変更
  */
  window.scrollTo({
    top: destination,
    behavior: "smooth"
  });
}

//　BGM再生
initBgmControls();

function initBgmControls() {

  const bgm =
    document.getElementById("bgm");

  const bgmToggle =
    document.getElementById("bgm-toggle");

  const bgmVolume =
    document.getElementById("bgm-volume");

  const bgmVolumeValue =
    document.getElementById("bgm-volume-value");


  if (
    !bgm ||
    !bgmToggle ||
    !bgmVolume ||
    !bgmVolumeValue
  ) {
    return;
  }


  // 初期音量
  bgm.volume =
    Number(bgmVolume.value) / 100;


  // ===== 再生 / 停止 =====

  bgmToggle.addEventListener(
    "click",
    async () => {

      // 停止中なら再生
      if (bgm.paused) {

        try {

          await bgm.play();

        } catch (error) {

          alert(
            "音声の再生に失敗しました。音源ファイルを確認してください。"
          );

        }

      } else {

        // 再生中なら停止
        bgm.pause();

      }

    }
  );


  // ===== 音量 =====

  bgmVolume.addEventListener(
    "input",
    () => {

      const volume =
        Number(bgmVolume.value);

      bgm.volume =
        volume / 100;

      bgmVolumeValue.textContent =
        `${volume}%`;

    }
  );


  // ===== 実際のaudio状態からボタン表示を変更 =====

  bgm.addEventListener(
    "play",
    () => {

      bgmToggle.textContent =
        "BGM停止";

    }
  );


  bgm.addEventListener(
    "pause",
    () => {

      bgmToggle.textContent =
        "BGM再生";

    }
  );


  bgm.addEventListener(
    "ended",
    () => {

      bgmToggle.textContent =
        "BGM再生";

    }
  );
}

// ページごとのBGM切り替え

async function changePageBgm(page) {

  const bgm =
    document.getElementById("bgm");

  if (
    !bgm ||
    !page ||
    !page.bgm
  ) {
    return;
  }


  // 今まで再生していたか
  const wasPlaying =
    !bgm.paused;


  /*
    現在の曲と同じなら
    切り替え不要
  */
  const currentSrc =
    bgm.getAttribute("src");


  if (currentSrc === page.bgm) {
    return;
  }


  // 新しいBGMへ変更
  bgm.src = page.bgm;

  bgm.load();


  /*
    前のページで再生していた場合だけ
    新しい曲も自動再生
  */
  if (wasPlaying) {

    try {

      await bgm.play();

    } catch (error) {

      console.log(
        "BGMの自動継続再生に失敗しました。"
      );

    }

  }
}

// ハンバーガーボタン
initHamburgerMenu();
initMobileControlState();
function initHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".nav");
  if (!hamburger || !nav) {
    return;
  }

  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });
}
// BGMコントロールの表示状態をスマホで初期化
function initMobileControlState() {
  if (document.querySelector('.bgm-control')) {
    document.body.classList.add('has-bgm');
  }
}

// 写真ギャラリー制御

let galleryTrack = null;
let galleryImages = [];

let current = 0;
let target = 0;

let isTouching = false;
let snapTimer = null;

const gallerySpeed = 0.06;
// ===== ポップアップ用 =====

let popupTriggers = [];
let currentPhotoIndex = 0;

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

/* 補間 */

function lerp(a, b, amount) {
  return a + (b - a) * amount;
}


/* 現在表示されているギャラリー取得 */

function refreshGalleryElements() {
  galleryTrack = document.querySelector(".track");

  galleryImages = galleryTrack
    ? Array.from(galleryTrack.querySelectorAll("img"))
    : [];
}


/* ギャラリー初期化 */

function initGallery() {
  refreshGalleryElements();

  if (!galleryTrack || galleryImages.length === 0) {
    return;
  }

  /*
    ページ切り替え時は
    必ず最初の写真へ戻す
  */
  current = 0;
  target = 0;

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

  /*
    JSで写真を生成した直後なので、
    レイアウト確定後に高さ計算
  */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      updatePageHeight();
    });
  });
}

function initPopup() {

  /*
    現在のページに存在する写真を
    毎回取り直す
  */
  popupTriggers = Array.from(
    document.querySelectorAll(".popup-trigger")
  );

  currentPhotoIndex = 0;
}

/* スクロール位置取得 */

window.addEventListener(
  "scroll",
  () => {
    /*
      スマホは縦並びなので
      横移動用targetは更新しない
    */
    if (window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    target = window.scrollY;

  // ポップアップを開いている場合は
// スクロール位置に合わせて写真も変更
if (
  popup &&
  popup.classList.contains("active") &&
  galleryImages.length > 0
) {

  const firstImage = galleryImages[0];

  const imageWidth = firstImage.offsetWidth;

  const gap =
    parseFloat(
      getComputedStyle(galleryTrack).gap
    ) || 0;

  const itemWidth =
    imageWidth + gap;

  let index =
    Math.round(
      window.scrollY / itemWidth
    );

  // 範囲外にならないようにする
  index = Math.max(
    0,
    Math.min(
      index,
      popupTriggers.length - 1
    )
  );

  if (index !== currentPhotoIndex) {

    /*
      falseにするのが重要。
      スクロール→ポップアップ変更→
      またスクロール、というループを防ぐ。
    */
    showPopupPhoto(index, false);
  }
}

    /*
      中央スナップ
    */
    clearTimeout(snapTimer);

    snapTimer = setTimeout(() => {
      if (
        !galleryTrack ||
        galleryImages.length === 0
      ) {
        return;
      }

      const firstImage = galleryImages[0];

      const imageWidth =
        firstImage.offsetWidth;

      const gap =
        parseFloat(
          getComputedStyle(galleryTrack).gap
        ) || 0;

      const itemWidth =
        imageWidth + gap;

      target =
        Math.round(target / itemWidth) *
        itemWidth;

    }, 120);
  },
  { passive: true }
);


/* タッチ状態 */

window.addEventListener(
  "touchstart",
  () => {
    isTouching = true;
  },
  { passive: true }
);

window.addEventListener(
  "touchend",
  () => {
    isTouching = false;
  },
  { passive: true }
);


/* 横スクロール描画 */

function updateGallery() {

  requestAnimationFrame(updateGallery);

  /*
    ギャラリーが存在しない場合
  */
  if (
    !galleryTrack ||
    galleryImages.length === 0
  ) {
    return;
  }

  /*
    スマホはCSS側で縦並びなので
    transformを使用しない
  */
  if (
    window.matchMedia("(max-width: 767px)").matches
  ) {
    galleryTrack.style.transform = "none";
    return;
  }

  current = lerp(
    current,
    target,
    isTouching ? 0.12 : gallerySpeed
  );

  const firstImage = galleryImages[0];

  const imageWidth =
    firstImage.offsetWidth;

  const offset =
    window.innerWidth / 2 -
    imageWidth / 2;

  const x =
    -current + offset;

  galleryTrack.style.transform =
    `translate3d(${x}px, 0, 0)`;
}


/*
  アニメーションはサイト全体で
  一度だけ起動する
*/

updateGallery();

// ピクトグラム
const opening = document.getElementById('opening');

function hideOpening() {

  opening.classList.add('hide');

}

// スクロールしたら消える
window.addEventListener('wheel', hideOpening, { once: true });

// スマホ用（念のため）
window.addEventListener('touchmove', hideOpening, { once: true });

//　ページ呼び出し
loadPageFromHash();
