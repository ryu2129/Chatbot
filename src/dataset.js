const defaultDataset = {
  "init": {
      answers: [
          {content: "履歴書等をみてみたい", nextId: "resumes"},
          {content: "ポートフォリオをみてみたい", nextId: "portfolio"},
          {content: "Git hubをみてみたい", nextId: "github"},
          {content: "私について知りたい", nextId: "myprofile"},
      ],
      question: "こんにちは！ご用件はなんでしょうか？",
  },
  "resumes": {
      answers: [
          {content: "履歴書", nextId: "resume"},
          {content: "職務経歴書", nextId: "job-resume"},
          {content: "スキルシート", nextId: "skill-seat"},
          {content: "wantedlyのプロフィール", nextId: "wantedly"}
      ],
      question: "どちらをご覧になりますか？",
  },
  "resume": {
      answers: [
          {content: "こちらからご覧ください！", nextId: "https://drive.google.com/file/d/1OvF_ju6YB8hEa-JsYkgIHgJis76Ubj43/view?usp=sharing"},
          {content: "連絡したい！", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "履歴書ですね。コチラからご覧いただけます。",
  },
  "job-resume": {
      answers: [
          {content: "こちらからご覧ください！", nextId: "https://drive.google.com/file/d/1AvPruSooMSBQARYFPNt8gqYIE4qo_Sns/view?usp=sharing"},
          {content: "連絡したい！", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "職務経歴書ですね。コチラからご覧いただけます。",
  },
  "skill-seat": {
      answers: [
          {content: "こちらからご覧ください！", nextId: "https://drive.google.com/file/d/1FUzpB1xqsUSaycI9w3etqQZplJyddQhX/view?usp=sharing"},
          {content: "連絡したい！", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "スキルシートですね。コチラからご覧いただけます。",
  },
  "wantedly": {
    answers: [
        {content: "こちらからご覧ください！", nextId: "https://www.wantedly.com/users/130125840?profile_v1=true"},
        {content: "連絡したい！", nextId: "contact"},
        {content: "最初の質問に戻る", nextId: "init"}
    ],
    question: "wantedlyのプロフィールですね。コチラからご覧いただけます。",
  },
  "portfolio": {
      answers: [
          {content: "パーソナルトレーニング予約サイト", nextId: "portfolio1"},
          {content: "Parrot(ライブ情報共有アプリケーション)", nextId: "portfolio2"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "どちらをご覧になりますか？",
  },
  "portfolio1": {
    answers: [
        {content: "こちらからご覧ください！", nextId: "https://www.hocchi-tetsuya.com/"},
        {content: "連絡したい！", nextId: "contact"},
        {content: "最初の質問に戻る", nextId: "init"}
    ],
    question: "パーソナルトレーニング予約サイトですね。コチラはスクール入学前に友人に依頼され独学で作り上げたものになります。",
},
"portfolio2": {
  answers: [
      {content: "こちらからご覧ください！", nextId: "https://parrot-live.work/"},
      {content: "機能一覧等はこちら！(Github)", nextId: "https://github.com/ryu2129/Parrot"},
      {content: "連絡したい！", nextId: "contact"},
      {content: "最初の質問に戻る", nextId: "init"}
  ],
  question: "Parrot(ライブ情報共有アプリケーション)ですね。コチラからご覧いただけます。",
},
  "github": {
      answers: [
          {content: "こちらからご覧ください！", nextId: "https://github.com/ryu2129"},
          {content: "連絡したい！", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Git hubですね。コチラからご覧いただけます。",
  },
  "myprofile": {
      answers: [
          {content: "趣味は？", nextId: "hobby"},
          {content: "秘密教えて！", nextId: "secret"},
          {content: "連絡したい！", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "22歳、阿部龍之介です！",
  },
  "hobby": {
    answers: [
        {content: "連絡したい！", nextId: "contact"},
        {content: "最初の質問に戻る", nextId: "init"}
    ],
    question: "音楽（特に日本のヒップホップ）が好きで、自分で作ったり、ライブによく行ってます🕺🏻",
  },
  "secret": {
    answers: [
        {content: "う、うん・・・", nextId: "secret-rial"},
        {content: "最初の質問に戻る", nextId: "init"}
    ],
    question: "本当に知りたい？？？？？？？",
  },
  "secret-rial": {
    answers: [
        {content: "ギャーーーーーーー！！！（最初の質問に戻る）", nextId: "init"}
    ],
    question: "実は、学生時代アイドルが好きすぎて小さな車が変えるくらいお金を使っていました・・・",
  },
}

export default defaultDataset