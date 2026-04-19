// 百首データ
// 各札の型:
// {
//   id: number,              // 1〜100
//   author: string,          // 作者名
//   kamiNoKu: string,        // 上の句（漢字仮名交じり）
//   shimoNoKu: string,       // 下の句（漢字仮名交じり）
//   kimariji: string,        // 決まり字（ひらがな）
//   leadingChar: string,     // 上の句先頭のひらがな1字（カテゴリー判定用）
//   translation: string,     // 現代語訳
//   explanation: string      // 解説
// }
export const cards = [
  {
    id: 1, author: '天智天皇',
    kamiNoKu: '秋の田の かりほの庵の 苫をあらみ',
    shimoNoKu: 'わが衣手は 露にぬれつつ',
    kimariji: 'あきの', leadingChar: 'あ',
    translation: '秋の田のそばの仮小屋の屋根を葺いた苫の編目が粗いので、私の衣の袖は夜露でぬれ続けていることだ。',
    explanation: '第38代天皇。農民の労苦をしのぶ歌として仕立てられた。もとは万葉集の作者不詳歌とされる。'
  },
  {
    id: 2, author: '持統天皇',
    kamiNoKu: '春過ぎて 夏来にけらし 白妙の',
    shimoNoKu: '衣ほすてふ 天の香具山',
    kimariji: 'はるす', leadingChar: 'は',
    translation: '春が過ぎて夏が来たらしい。真っ白な衣が干してあるという天の香具山よ。',
    explanation: '天智天皇の皇女で第41代天皇。万葉集の初夏の歌を新古今集時代の語調に改めたもの。'
  },
  {
    id: 3, author: '柿本人麻呂',
    kamiNoKu: 'あしびきの 山鳥の尾の しだり尾の',
    shimoNoKu: 'ながながし夜を ひとりかも寝む',
    kimariji: 'あし', leadingChar: 'あ',
    translation: '山鳥の長く垂れ下がった尾のように、長い長い秋の夜を私はひとりさびしく寝るのだろうか。',
    explanation: '万葉集を代表する歌聖。独り寝の寂しさをうたった恋の歌。'
  },
  {
    id: 4, author: '山部赤人',
    kamiNoKu: '田子の浦に うち出でて見れば 白妙の',
    shimoNoKu: '富士の高嶺に 雪は降りつつ',
    kimariji: 'たご', leadingChar: 'た',
    translation: '田子の浦に出て眺めると、真っ白な富士の高嶺に雪が降り続いていることだ。',
    explanation: '奈良時代の宮廷歌人。万葉集原歌「真白にそ…降りける」を平安後期の調子に改めた形。'
  },
  {
    id: 5, author: '猿丸大夫',
    kamiNoKu: '奥山に 紅葉踏み分け 鳴く鹿の',
    shimoNoKu: '声聞く時ぞ 秋は悲しき',
    kimariji: 'おく', leadingChar: 'お',
    translation: '人里離れた奥山で、散り敷く紅葉を踏み分けて鳴く鹿の声を聞くとき、秋のさびしさが身にしみる。',
    explanation: '伝説的な歌人で実在は不詳。古今集では詠み人知らずの歌。'
  },
  {
    id: 6, author: '中納言家持',
    kamiNoKu: 'かささぎの 渡せる橋に おく霜の',
    shimoNoKu: '白きを見れば 夜ぞ更けにける',
    kimariji: 'かさ', leadingChar: 'か',
    translation: '七夕にかささぎが翼を連ねて渡すという橋、その橋に置いた霜の白さを見れば、夜もすっかり更けたのだなあ。',
    explanation: '大伴家持。万葉集の編者。宮中の御階を天の川の橋に見立てたとする説もある。'
  },
  {
    id: 7, author: '阿倍仲麻呂',
    kamiNoKu: '天の原 ふりさけ見れば 春日なる',
    shimoNoKu: '三笠の山に 出でし月かも',
    kimariji: 'あまの', leadingChar: 'あ',
    translation: '大空を遠く仰ぎ見ると、あの月は、故郷の春日の三笠山に出ていた月と同じ月なのだなあ。',
    explanation: '遣唐留学生として唐に渡り、帰国叶わず異国に没した。望郷の名歌。'
  },
  {
    id: 8, author: '喜撰法師',
    kamiNoKu: 'わが庵は 都のたつみ しかぞ住む',
    shimoNoKu: '世をうぢ山と 人はいふなり',
    kimariji: 'わがい', leadingChar: 'わ',
    translation: '私の庵は都の東南にある。このように心静かに住んでいるのに、世を憂しと宇治山に隠れていると人は言うらしい。',
    explanation: '六歌仙の一人。「しか」に「然」と「鹿」、「うぢ」に「宇治」と「憂し」を掛ける。'
  },
  {
    id: 9, author: '小野小町',
    kamiNoKu: '花の色は うつりにけりな いたづらに',
    shimoNoKu: 'わが身世にふる ながめせしまに',
    kimariji: 'はなの', leadingChar: 'は',
    translation: '花の色はむなしく色あせてしまった。長雨が降り続く間、そして私が物思いにふけっている間に。',
    explanation: '六歌仙の一人で絶世の美女として名高い。「ふる」「ながめ」に二重の意味を掛ける。'
  },
  {
    id: 10, author: '蝉丸',
    kamiNoKu: 'これやこの 行くも帰るも 別れては',
    shimoNoKu: '知るも知らぬも 逢坂の関',
    kimariji: 'これ', leadingChar: 'こ',
    translation: 'これがあの、東へ行く人も都へ帰る人もここで別れ、また知人も他人もここで逢う、逢坂の関なのだよ。',
    explanation: '盲目の琵琶の名手とされる伝説的人物。「逢坂」に「逢ふ」を掛ける。'
  },
  {
    id: 11, author: '参議篁',
    kamiNoKu: 'わたの原 八十島かけて 漕ぎ出でぬと',
    shimoNoKu: '人には告げよ 海人の釣舟',
    kimariji: 'わたのはらや', leadingChar: 'わ',
    translation: '大海原の数多くの島々を目指して漕ぎ出していったと、都の人に伝えておくれ、海人の釣舟よ。',
    explanation: '小野篁。遣唐副使を拒み隠岐に配流となった際、難波津から詠んだ歌。'
  },
  {
    id: 12, author: '僧正遍昭',
    kamiNoKu: '天つ風 雲の通ひ路 吹き閉ぢよ',
    shimoNoKu: 'をとめの姿 しばしとどめむ',
    kimariji: 'あまつ', leadingChar: 'あ',
    translation: '空を吹く風よ、雲の通い路を吹き閉ざしておくれ。天女のような舞姫の姿をしばらくとどめておきたい。',
    explanation: '六歌仙の一人。豊明節会で五節の舞姫を見て詠んだ。'
  },
  {
    id: 13, author: '陽成院',
    kamiNoKu: '筑波嶺の 峰より落つる みなの川',
    shimoNoKu: '恋ぞつもりて 淵となりぬる',
    kimariji: 'つく', leadingChar: 'つ',
    translation: '筑波山の峰から落ちる男女川のように、私の恋も積もりに積もって深い淵のようになってしまった。',
    explanation: '第57代天皇。皇女綏子内親王に贈った恋歌。'
  },
  {
    id: 14, author: '河原左大臣',
    kamiNoKu: '陸奥の しのぶもぢずり 誰ゆゑに',
    shimoNoKu: '乱れそめにし 我ならなくに',
    kimariji: 'みち', leadingChar: 'み',
    translation: '陸奥のしのぶ捩り染の乱れ模様のように、誰ゆゑに私の心は乱れはじめたのか。私のせいではないのに。',
    explanation: '源融。嵯峨天皇の皇子で光源氏のモデルの一人とも言われる。'
  },
  {
    id: 15, author: '光孝天皇',
    kamiNoKu: '君がため 春の野に出でて 若菜つむ',
    shimoNoKu: 'わが衣手に 雪は降りつつ',
    kimariji: 'きみがためは', leadingChar: 'き',
    translation: 'あなたのために春の野に出て若菜を摘む、その私の袖には雪が降り続いていることよ。',
    explanation: '第58代天皇。親王時代の歌。若菜摘みは長寿を願う贈答の儀礼。'
  },
  {
    id: 16, author: '中納言行平',
    kamiNoKu: '立ち別れ いなばの山の 峰に生ふる',
    shimoNoKu: 'まつとし聞かば 今帰り来む',
    kimariji: 'たち', leadingChar: 'た',
    translation: 'お別れして因幡へ行きますが、いなばの山の峰に生える松のように、あなたが待つと聞いたならすぐ帰って来よう。',
    explanation: '在原業平の兄。因幡守赴任にあたっての歌。「いなば」「まつ」が掛詞。'
  },
  {
    id: 17, author: '在原業平朝臣',
    kamiNoKu: 'ちはやぶる 神代も聞かず 竜田川',
    shimoNoKu: 'からくれなゐに 水くくるとは',
    kimariji: 'ちは', leadingChar: 'ち',
    translation: '荒々しい神代にも聞いたことがない。竜田川が紅葉を唐紅色に水を絞り染めにするとは。',
    explanation: '六歌仙の一人。二条后高子のもとに屏風歌として贈られた。'
  },
  {
    id: 18, author: '藤原敏行朝臣',
    kamiNoKu: '住の江の 岸による波 よるさへや',
    shimoNoKu: '夢の通ひ路 人目よくらむ',
    kimariji: 'す', leadingChar: 'す',
    translation: '住の江の岸に寄せる波のように、夜までも、夢の中の逢瀬であなたは人目を避けるのだろうか。',
    explanation: '藤原敏行。能書家としても名高い。「よる」に「寄る」「夜」を掛ける。'
  },
  {
    id: 19, author: '伊勢',
    kamiNoKu: '難波潟 みじかき蘆の ふしのまも',
    shimoNoKu: '逢はでこの世を 過ぐしてよとや',
    kimariji: 'なにはが', leadingChar: 'な',
    translation: '難波潟に生える短い蘆の節と節の間ほどの短い時間さえも、逢わずにこの世を過ごせというのか。',
    explanation: '宇多天皇の中宮温子に仕えた女房歌人。古今集女流を代表する。'
  },
  {
    id: 20, author: '元良親王',
    kamiNoKu: 'わびぬれば 今はた同じ 難波なる',
    shimoNoKu: 'みをつくしても 逢はむとぞ思ふ',
    kimariji: 'わび', leadingChar: 'わ',
    translation: '思い悩んだ今はもう同じこと。難波の澪標のように身を尽くしてでもあなたに逢いたい。',
    explanation: '陽成院の第一皇子。宇多天皇の皇女京極御息所との忍び逢いの歌。'
  },
  {
    id: 21, author: '素性法師',
    kamiNoKu: '今来むと 言ひしばかりに 長月の',
    shimoNoKu: '有明の月を 待ち出でつるかな',
    kimariji: 'いまこ', leadingChar: 'い',
    translation: 'すぐ行くとあなたが言ったその一言を信じて、長月の夜長を待ち、ついに有明の月を迎えてしまったよ。',
    explanation: '僧正遍昭の子。女性の立場で詠んだ代詠の歌。'
  },
  {
    id: 22, author: '文屋康秀',
    kamiNoKu: '吹くからに 秋の草木の しをるれば',
    shimoNoKu: 'むべ山風を 嵐といふらむ',
    kimariji: 'ふ', leadingChar: 'ふ',
    translation: '吹くやいなや秋の草木が萎れてしまうので、なるほど山風を嵐(荒らし)と言うのだろう。',
    explanation: '六歌仙の一人。「山」+「風」=「嵐」という字の遊びを詠み込んだ。'
  },
  {
    id: 23, author: '大江千里',
    kamiNoKu: '月見れば ちぢに物こそ 悲しけれ',
    shimoNoKu: 'わが身一つの 秋にはあらねど',
    kimariji: 'つき', leadingChar: 'つ',
    translation: '月を見ると、さまざまに物悲しい思いがする。私ひとりだけに訪れた秋ではないのだけれども。',
    explanation: '白楽天の詩句を翻案した漢詩題の和歌。'
  },
  {
    id: 24, author: '菅家',
    kamiNoKu: 'このたびは 幣も取りあへず 手向山',
    shimoNoKu: '紅葉の錦 神のまにまに',
    kimariji: 'この', leadingChar: 'こ',
    translation: 'このたびの旅は幣を用意するいとまもないので、手向山の紅葉の錦を神の御心のままに手向けます。',
    explanation: '菅原道真。宇多上皇の吉野行幸に随行した際の歌。「たび」が掛詞。'
  },
  {
    id: 25, author: '三条右大臣',
    kamiNoKu: '名にし負はば 逢坂山の さねかづら',
    shimoNoKu: '人に知られで くるよしもがな',
    kimariji: 'なにし', leadingChar: 'な',
    translation: '逢坂山のさねかずらがその名の通りなら、人に知られずあなたに逢いに来る方法があればよいのに。',
    explanation: '藤原定方。「さね」「くる」に掛詞を重ねた巧みな恋歌。'
  },
  {
    id: 26, author: '貞信公',
    kamiNoKu: '小倉山 峰のもみぢ葉 心あらば',
    shimoNoKu: '今ひとたびの みゆき待たなむ',
    kimariji: 'おぐ', leadingChar: 'お',
    translation: '小倉山の峰の紅葉よ、もし心があるなら、もう一度の行幸を待っていてほしい。',
    explanation: '藤原忠平。宇多上皇に従った際、醍醐天皇の行幸を願って詠んだ。'
  },
  {
    id: 27, author: '中納言兼輔',
    kamiNoKu: 'みかの原 わきて流るる いづみ川',
    shimoNoKu: 'いつ見きとてか 恋しかるらむ',
    kimariji: 'みかの', leadingChar: 'み',
    translation: 'みかの原を分けて流れる泉川、その「いつ見」ではないが、いつ見たというので、こう恋しいのだろう。',
    explanation: '藤原兼輔。紫式部の曽祖父。「いづみ」に「出づ」「いつ見」の掛詞。'
  },
  {
    id: 28, author: '源宗于朝臣',
    kamiNoKu: '山里は 冬ぞさびしさ まさりける',
    shimoNoKu: '人目も草も かれぬと思へば',
    kimariji: 'やま', leadingChar: 'や',
    translation: '山里は冬こそさびしさが増さることよ。人も訪れなくなり草も枯れてしまうと思うと。',
    explanation: '光孝天皇の孫。「かれぬ」に「離れ」「枯れ」を掛ける。'
  },
  {
    id: 29, author: '凡河内躬恒',
    kamiNoKu: '心あてに 折らばや折らむ 初霜の',
    shimoNoKu: '置きまどはせる 白菊の花',
    kimariji: 'こころあ', leadingChar: 'こ',
    translation: '心あてに折ろうとしても折れようか。初霜が降りて見分けがつかなくなった白菊の花を。',
    explanation: '古今集撰者の一人。白い霜と白菊を見紛える視覚の妙。'
  },
  {
    id: 30, author: '壬生忠岑',
    kamiNoKu: '有明の つれなく見えし 別れより',
    shimoNoKu: '暁ばかり 憂きものはなし',
    kimariji: 'ありあ', leadingChar: 'あ',
    translation: '有明の月がつれなく見えたあの別れからこのかた、暁ほどつらいものはない。',
    explanation: '古今集撰者の一人。夜明けの別れを嘆く後朝の歌。'
  },
  {
    id: 31, author: '坂上是則',
    kamiNoKu: '朝ぼらけ 有明の月と 見るまでに',
    shimoNoKu: '吉野の里に 降れる白雪',
    kimariji: 'あさぼらけあ', leadingChar: 'あ',
    translation: '夜明け方、有明の月かと見まがうほどに、吉野の里に降り積もった白雪よ。',
    explanation: '坂上田村麻呂の子孫。月と雪を見紛える幻想的な歌。'
  },
  {
    id: 32, author: '春道列樹',
    kamiNoKu: '山川に 風のかけたる しがらみは',
    shimoNoKu: '流れもあへぬ 紅葉なりけり',
    kimariji: 'やまが', leadingChar: 'や',
    translation: '山の中を流れる川に風がかけた柵は、流れきれずに溜まった紅葉だったのだなあ。',
    explanation: '春道列樹は平安前期の歌人。紅葉の錦を柵に見立てた技巧の歌。'
  },
  {
    id: 33, author: '紀友則',
    kamiNoKu: 'ひさかたの 光のどけき 春の日に',
    shimoNoKu: 'しづ心なく 花の散るらむ',
    kimariji: 'ひさ', leadingChar: 'ひ',
    translation: 'のどかな春の日の光の中で、なぜ桜の花は落ち着きなく散ってゆくのだろう。',
    explanation: '古今集撰者の一人。春の日の静けさと花の散りようの対比が美しい。'
  },
  {
    id: 34, author: '藤原興風',
    kamiNoKu: '誰をかも しる人にせむ 高砂の',
    shimoNoKu: '松も昔の 友ならなくに',
    kimariji: 'たれ', leadingChar: 'た',
    translation: '誰を親しい友としようか。高砂の松さえ、昔からの友というわけではないのに。',
    explanation: '長命を生きて友を失った老境の述懐。'
  },
  {
    id: 35, author: '紀貫之',
    kamiNoKu: '人はいさ 心も知らず ふるさとは',
    shimoNoKu: '花ぞ昔の 香に匂ひける',
    kimariji: 'ひとは', leadingChar: 'ひ',
    translation: '人の心はさあどうか分からない。だが、馴染みの里では梅の花が昔のままの香で匂っていることよ。',
    explanation: '古今集の撰者。仮名序を書いた平安和歌の祖。'
  },
  {
    id: 36, author: '清原深養父',
    kamiNoKu: '夏の夜は まだ宵ながら 明けぬるを',
    shimoNoKu: '雲のいづこに 月宿るらむ',
    kimariji: 'なつ', leadingChar: 'な',
    translation: '夏の夜は宵のうちに明けてしまった。月は雲のどこに宿を取ったのだろう。',
    explanation: '清少納言の曽祖父。夏の短夜の趣を詠む。'
  },
  {
    id: 37, author: '文屋朝康',
    kamiNoKu: '白露に 風の吹きしく 秋の野は',
    shimoNoKu: 'つらぬきとめぬ 玉ぞ散りける',
    kimariji: 'しら', leadingChar: 'し',
    translation: '白露に風が吹きつける秋の野は、糸を通してとめていない玉が散り飛ぶようだ。',
    explanation: '文屋康秀の子。露を玉に見立てた視覚的な名歌。'
  },
  {
    id: 38, author: '右近',
    kamiNoKu: '忘らるる 身をば思はず 誓ひてし',
    shimoNoKu: '人の命の 惜しくもあるかな',
    kimariji: 'わすら', leadingChar: 'わ',
    translation: '忘れられるわが身のことは嘆かない。神に誓ったあの人の命が、罰を受けはしないかと惜しまれる。',
    explanation: '右近は醍醐天皇の中宮穏子に仕えた女房。恨みを秘めた恋歌。'
  },
  {
    id: 39, author: '参議等',
    kamiNoKu: '浅茅生の 小野の篠原 しのぶれど',
    shimoNoKu: 'あまりてなどか 人の恋しき',
    kimariji: 'あさぢ', leadingChar: 'あ',
    translation: '浅茅の生える小野の篠原の「しの」ではないが、忍んでも忍びきれず、どうしてこんなにあの人が恋しいのか。',
    explanation: '源等。「しの」を序詞で導く技巧の歌。'
  },
  {
    id: 40, author: '平兼盛',
    kamiNoKu: 'しのぶれど 色に出でにけり わが恋は',
    shimoNoKu: '物や思ふと 人の問ふまで',
    kimariji: 'しの', leadingChar: 'し',
    translation: '忍んでいたけれど、顔色に出てしまったよ、私の恋は。物思いしているのかと人に問われるほどに。',
    explanation: '天徳内裏歌合で壬生忠見と競い勝利した名歌。'
  },
  {
    id: 41, author: '壬生忠見',
    kamiNoKu: '恋すてふ わが名はまだき 立ちにけり',
    shimoNoKu: '人知れずこそ 思ひそめしか',
    kimariji: 'こひ', leadingChar: 'こ',
    translation: '恋をしているという私の噂が、早くも立ってしまった。人知れず思いはじめたばかりなのに。',
    explanation: '壬生忠岑の子。40番と天徳歌合で競った際の歌。'
  },
  {
    id: 42, author: '清原元輔',
    kamiNoKu: '契りきな かたみに袖を しぼりつつ',
    shimoNoKu: '末の松山 波越さじとは',
    kimariji: 'ちぎりき', leadingChar: 'ち',
    translation: '約束したではないか、互いに涙に濡れた袖を絞りながら、末の松山を波が越すことがないように心変わりしないと。',
    explanation: '清少納言の父。変心した女に代わって詠んだとされる。'
  },
  {
    id: 43, author: '権中納言敦忠',
    kamiNoKu: '逢ひ見ての のちの心に くらぶれば',
    shimoNoKu: '昔は物を 思はざりけり',
    kimariji: 'あひ', leadingChar: 'あ',
    translation: '逢って契りを交わしたのちの恋心に比べれば、以前の恋は物思いのうちにも入らないものだった。',
    explanation: '藤原敦忠。三十六歌仙の一人で若くして没した。'
  },
  {
    id: 44, author: '中納言朝忠',
    kamiNoKu: '逢ふことの 絶えてしなくは なかなかに',
    shimoNoKu: '人をも身をも 恨みざらまし',
    kimariji: 'あふ', leadingChar: 'あ',
    translation: '逢うことが全くないのであったなら、かえってあの人をも自分をも恨まずにすんだろうに。',
    explanation: '藤原朝忠。逢瀬がかなわぬ苦しさを詠む。'
  },
  {
    id: 45, author: '謙徳公',
    kamiNoKu: 'あはれとも いふべき人は 思ほえで',
    shimoNoKu: '身のいたづらに なりぬべきかな',
    kimariji: 'あはれ', leadingChar: 'あ',
    translation: '「かわいそうに」と言ってくれそうな人も思い浮かばず、このまま身は空しく死んでゆくのだろう。',
    explanation: '藤原伊尹。恋に破れた嘆きの歌。'
  },
  {
    id: 46, author: '曽禰好忠',
    kamiNoKu: '由良のとを 渡る舟人 かぢを絶え',
    shimoNoKu: '行方も知らぬ 恋の道かな',
    kimariji: 'ゆら', leadingChar: 'ゆ',
    translation: '由良の門を渡る舟人が櫂を失って漂うように、行方も知れぬ恋の道であるよ。',
    explanation: '曽禰好忠は中古三十六歌仙の一人。漂う舟に恋の不安を重ねた。'
  },
  {
    id: 47, author: '恵慶法師',
    kamiNoKu: '八重葎 しげれる宿の さびしきに',
    shimoNoKu: '人こそ見えね 秋は来にけり',
    kimariji: 'やへ', leadingChar: 'や',
    translation: '雑草の生い茂った荒れた宿のさびしさに、訪れる人はいないけれど、秋だけはやって来たのだなあ。',
    explanation: '河原院で詠まれた秋の述懐歌。'
  },
  {
    id: 48, author: '源重之',
    kamiNoKu: '風をいたみ 岩うつ波の おのれのみ',
    shimoNoKu: 'くだけて物を 思ふころかな',
    kimariji: 'かぜを', leadingChar: 'か',
    translation: '風が激しく岩を打つ波が自ら砕けるように、私だけが心を砕いて物思いする、この頃である。',
    explanation: '源重之は三十六歌仙の一人。波に自らを重ねる恋歌。'
  },
  {
    id: 49, author: '大中臣能宣',
    kamiNoKu: 'みかきもり 衛士のたく火の 夜はもえ',
    shimoNoKu: '昼は消えつつ 物をこそ思へ',
    kimariji: 'みかき', leadingChar: 'み',
    translation: '御垣守の衛士がたく火のように、夜は恋の炎に燃え、昼は消え入るばかりに物思いしている。',
    explanation: '能宣は三十六歌仙の一人。伊勢神宮の祭主。'
  },
  {
    id: 50, author: '藤原義孝',
    kamiNoKu: '君がため 惜しからざりし 命さへ',
    shimoNoKu: '長くもがなと 思ひけるかな',
    kimariji: 'きみがためを', leadingChar: 'き',
    translation: 'あなたのためなら惜しくないと思っていた命さえ、逢ったあとは長くあってほしいと思うようになった。',
    explanation: '藤原義孝。若くして没した美男で、後朝の歌として有名。'
  },
  {
    id: 51, author: '藤原実方朝臣',
    kamiNoKu: 'かくとだに えやはいぶきの さしも草',
    shimoNoKu: 'さしも知らじな もゆる思ひを',
    kimariji: 'かく', leadingChar: 'か',
    translation: 'これほどまでとさえ言えないので、伊吹山のさしも草のように、燃える私の想いをあなたはご存じないだろう。',
    explanation: '「えやは言ふ」と「伊吹山」の掛詞。さしも草はよもぎ。'
  },
  {
    id: 52, author: '藤原道信朝臣',
    kamiNoKu: '明けぬれば 暮るるものとは 知りながら',
    shimoNoKu: 'なほうらめしき 朝ぼらけかな',
    kimariji: 'あけ', leadingChar: 'あ',
    translation: '夜が明ければまた日が暮れて逢えるとわかっていても、やはり恨めしい夜明けであることよ。',
    explanation: '後朝の別れを詠んだ代表歌。'
  },
  {
    id: 53, author: '右大将道綱母',
    kamiNoKu: '嘆きつつ ひとり寝る夜の 明くる間は',
    shimoNoKu: 'いかに久しき ものとかは知る',
    kimariji: 'なげき', leadingChar: 'な',
    translation: '嘆きながらひとり寝る夜が明けるまでの時間が、どんなに長いものか、あなたはお分かりでしょうか。',
    explanation: '蜻蛉日記の作者。夫兼家の訪れが絶えたときの歌。'
  },
  {
    id: 54, author: '儀同三司母',
    kamiNoKu: '忘れじの 行く末までは 難ければ',
    shimoNoKu: '今日を限りの 命ともがな',
    kimariji: 'わすれ', leadingChar: 'わ',
    translation: '「忘れまい」というお言葉が末永く続くのは難しいから、幸せな今日を限りに命が絶えたらよいのに。',
    explanation: '高階貴子。藤原道隆の妻で伊周・定子らの母。'
  },
  {
    id: 55, author: '大納言公任',
    kamiNoKu: '滝の音は 絶えて久しく なりぬれど',
    shimoNoKu: '名こそ流れて なほ聞こえけれ',
    kimariji: 'たき', leadingChar: 'た',
    translation: '滝の水音は絶えて久しいけれど、その名声は今も流れ伝わって聞こえていることよ。',
    explanation: '藤原公任。大覚寺の滝跡を訪れて詠んだ。'
  },
  {
    id: 56, author: '和泉式部',
    kamiNoKu: 'あらざらむ この世のほかの 思ひ出に',
    shimoNoKu: '今ひとたびの 逢ふこともがな',
    kimariji: 'あらざ', leadingChar: 'あ',
    translation: 'まもなく死ぬ私の、あの世への思い出にもう一度あなたにお逢いしたい。',
    explanation: '情熱の歌人。病床で男に贈った絶唱。'
  },
  {
    id: 57, author: '紫式部',
    kamiNoKu: 'めぐりあひて 見しやそれとも 分かぬまに',
    shimoNoKu: '雲がくれにし 夜半の月かな',
    kimariji: 'め', leadingChar: 'め',
    translation: '久しぶりに巡り逢い、それがあなたと見分けるまもなく、雲に隠れた夜半の月のようだった。',
    explanation: '源氏物語の作者。幼友達との再会を月に重ねた。'
  },
  {
    id: 58, author: '大弐三位',
    kamiNoKu: '有馬山 猪名の笹原 風吹けば',
    shimoNoKu: 'いでそよ人を 忘れやはする',
    kimariji: 'ありま', leadingChar: 'あ',
    translation: '有馬山の近くの猪名の笹原に風が吹くと「そよ」と鳴る。そうよ、どうしてあなたを忘れるものですか。',
    explanation: '紫式部の娘賢子。「そよ」は笹の音と「そうよ」の掛詞。'
  },
  {
    id: 59, author: '赤染衛門',
    kamiNoKu: 'やすらはで 寝なまし物を さ夜ふけて',
    shimoNoKu: 'かたぶくまでの 月を見しかな',
    kimariji: 'やす', leadingChar: 'や',
    translation: 'ためらわず寝てしまえばよかったものを、あなたを待つうちに夜が更け、傾く月まで見てしまった。',
    explanation: '赤染衛門。姉妹に代わって贈答歌を詠んだ。'
  },
  {
    id: 60, author: '小式部内侍',
    kamiNoKu: '大江山 いく野の道の 遠ければ',
    shimoNoKu: 'まだふみも見ず 天の橋立',
    kimariji: 'おほえ', leadingChar: 'お',
    translation: '大江山を越え生野へ行く道は遠いので、まだ天の橋立を踏んでもいないし、母からの文も見ていません。',
    explanation: '和泉式部の娘。「ふみ」に「踏み」「文」を掛けた即興の名歌。'
  },
  {
    id: 61, author: '伊勢大輔',
    kamiNoKu: 'いにしへの 奈良の都の 八重桜',
    shimoNoKu: 'けふ九重に 匂ひぬるかな',
    kimariji: 'いに', leadingChar: 'い',
    translation: 'いにしえの奈良の都の八重桜が、今日は宮中の九重で美しく咲き匂っていることよ。',
    explanation: '大中臣能宣の孫。八重桜献上時の即興歌。'
  },
  {
    id: 62, author: '清少納言',
    kamiNoKu: '夜をこめて 鳥の空音は はかるとも',
    shimoNoKu: 'よに逢坂の 関は許さじ',
    kimariji: 'よを', leadingChar: 'よ',
    translation: '夜明け前に鶏の鳴き真似で騙そうとしても、逢坂の関はけっして通しはしませんよ。',
    explanation: '枕草子の作者。藤原行成との機知に富む応酬。'
  },
  {
    id: 63, author: '左京大夫道雅',
    kamiNoKu: '今はただ 思ひ絶えなむ とばかりを',
    shimoNoKu: '人づてならで いふよしもがな',
    kimariji: 'いまは', leadingChar: 'い',
    translation: '今はただ「諦めよう」と、それだけを、人づてでなく直接あなたに言う手立てがあればよいのに。',
    explanation: '三条院皇女当子内親王との悲恋の歌。'
  },
  {
    id: 64, author: '権中納言定頼',
    kamiNoKu: '朝ぼらけ 宇治の川霧 絶え絶えに',
    shimoNoKu: 'あらはれ渡る 瀬々の網代木',
    kimariji: 'あさぼらけう', leadingChar: 'あ',
    translation: '夜明け方、宇治川の霧がとぎれとぎれに晴れてゆき、あちこちの瀬の網代木が現れてくる。',
    explanation: '藤原定頼。宇治川の幻想的な朝景を詠む。'
  },
  {
    id: 65, author: '相模',
    kamiNoKu: '恨みわび ほさぬ袖だに あるものを',
    shimoNoKu: '恋に朽ちなむ 名こそ惜しけれ',
    kimariji: 'うら', leadingChar: 'う',
    translation: '恨み嘆いて涙で乾く間もない袖さえ惜しいのに、この恋で朽ちてしまうだろう浮名がいっそう惜しい。',
    explanation: '相模。大江公資の妻。女歌の名手。'
  },
  {
    id: 66, author: '前大僧正行尊',
    kamiNoKu: 'もろともに あはれと思へ 山桜',
    shimoNoKu: '花よりほかに 知る人もなし',
    kimariji: 'もろ', leadingChar: 'も',
    translation: '一緒に懐かしいと思っておくれ、山桜よ。お前より他に私を知る人はいないのだから。',
    explanation: '三井寺の高僧。山中で桜を友と呼ぶ孤独の歌。'
  },
  {
    id: 67, author: '周防内侍',
    kamiNoKu: '春の夜の 夢ばかりなる 手枕に',
    shimoNoKu: 'かひなく立たむ 名こそ惜しけれ',
    kimariji: 'はるの', leadingChar: 'は',
    translation: '春の夜の短い夢のようなかりそめの手枕で、つまらない浮名が立つのは口惜しいことです。',
    explanation: '二条院の女房。戯れの手枕の申し出に応じた機知の歌。'
  },
  {
    id: 68, author: '三条院',
    kamiNoKu: '心にも あらで憂き世に ながらへば',
    shimoNoKu: '恋しかるべき 夜半の月かな',
    kimariji: 'こころに', leadingChar: 'こ',
    translation: '心ならずも憂き世に生きながらえたなら、きっと恋しく思うだろう、この夜半の月を。',
    explanation: '第67代天皇。眼病で譲位を余儀なくされた帝の悲嘆。'
  },
  {
    id: 69, author: '能因法師',
    kamiNoKu: '嵐ふく 三室の山の もみぢ葉は',
    shimoNoKu: '竜田の川の 錦なりけり',
    kimariji: 'あらし', leadingChar: 'あ',
    translation: '嵐が吹く三室の山の紅葉は、散って竜田川の錦となっていたのだなあ。',
    explanation: '能因法師。諸国を旅した歌枕の歌人。'
  },
  {
    id: 70, author: '良暹法師',
    kamiNoKu: 'さびしさに 宿を立ち出でて ながむれば',
    shimoNoKu: 'いづこも同じ 秋の夕暮れ',
    kimariji: 'さ', leadingChar: 'さ',
    translation: 'さびしさに耐えかねて庵を出て眺めてみれば、どこも同じさびしい秋の夕暮れであるよ。',
    explanation: '良暹法師。三夕の歌のひとつに並ぶ秋の名歌。'
  },
  {
    id: 71, author: '大納言経信',
    kamiNoKu: '夕されば 門田の稲葉 おとづれて',
    shimoNoKu: '芦のまろ屋に 秋風ぞ吹く',
    kimariji: 'ゆう', leadingChar: 'ゆ',
    translation: '夕方になると門前の田の稲葉をそよがせて、芦葺きの粗末な家に秋風が吹いてくる。',
    explanation: '源経信。田園の清新な秋の景。'
  },
  {
    id: 72, author: '祐子内親王家紀伊',
    kamiNoKu: '音に聞く 高師の浜の あだ波は',
    shimoNoKu: 'かけじや袖の ぬれもこそすれ',
    kimariji: 'おと', leadingChar: 'お',
    translation: '噂に名高い高師の浜のあだ波のように、浮気なあなたの言葉を信じますまい。袖が濡れるだけでしょう。',
    explanation: '堀河院艶書合の返歌として知られる。'
  },
  {
    id: 73, author: '前権中納言匡房',
    kamiNoKu: '高砂の 尾の上の桜 咲きにけり',
    shimoNoKu: '外山の霞 立たずもあらなむ',
    kimariji: 'たか', leadingChar: 'た',
    translation: '高砂の山の頂の桜が咲いたなあ。麓の山の霞よ、立たないでいてほしい、隠れてしまうから。',
    explanation: '大江匡房。漢学者としても名高い碩学。'
  },
  {
    id: 74, author: '源俊頼朝臣',
    kamiNoKu: 'うかりける 人を初瀬の 山おろしよ',
    shimoNoKu: '激しかれとは 祈らぬものを',
    kimariji: 'うか', leadingChar: 'う',
    translation: 'つれなかった人を初瀬の観音に祈ったけれど、初瀬の山おろしよ、こう激しくなれとは祈らなかったのに。',
    explanation: '源俊頼。金葉集の撰者。新風の歌人。'
  },
  {
    id: 75, author: '藤原基俊',
    kamiNoKu: '契りおきし させもが露を 命にて',
    shimoNoKu: 'あはれ今年の 秋もいぬめり',
    kimariji: 'ちぎりお', leadingChar: 'ち',
    translation: '約束してくれた慈悲の露のようなお言葉を命として待っていたが、ああ今年の秋も空しく過ぎてゆくようだ。',
    explanation: '藤原基俊。忠通の約束が果たされなかった嘆きを詠む。'
  },
  {
    id: 76, author: '法性寺入道前関白太政大臣',
    kamiNoKu: 'わたの原 漕ぎ出でてみれば ひさかたの',
    shimoNoKu: '雲ゐにまがふ 沖つ白波',
    kimariji: 'わたのはらこ', leadingChar: 'わ',
    translation: '大海原に漕ぎ出でてみると、はるか彼方、雲と見まごうほどの沖の白波よ。',
    explanation: '藤原忠通。平安末期の権勢家で歌壇の重鎮。'
  },
  {
    id: 77, author: '崇徳院',
    kamiNoKu: '瀬をはやみ 岩にせかるる 滝川の',
    shimoNoKu: 'われても末に 逢はむとぞ思ふ',
    kimariji: 'せ', leadingChar: 'せ',
    translation: '瀬が速く岩にせき止められた滝川が分かれても末でまた一つになるように、今は別れてもいつかきっと逢おう。',
    explanation: '第75代天皇。保元の乱で讃岐に配流された悲劇の帝。'
  },
  {
    id: 78, author: '源兼昌',
    kamiNoKu: '淡路島 通ふ千鳥の 鳴く声に',
    shimoNoKu: 'いく夜寝覚めぬ 須磨の関守',
    kimariji: 'あはぢ', leadingChar: 'あ',
    translation: '淡路島から通ってくる千鳥の鳴き声に、幾夜寝覚めしたことだろう、須磨の関守は。',
    explanation: '源兼昌。須磨の情景に関守の哀愁を重ねる。'
  },
  {
    id: 79, author: '左京大夫顕輔',
    kamiNoKu: '秋風に たなびく雲の 絶え間より',
    shimoNoKu: 'もれ出づる月の 影のさやけさ',
    kimariji: 'あきか', leadingChar: 'あ',
    translation: '秋風にたなびく雲の切れ間から、もれ出てくる月の光のなんと清らかなことよ。',
    explanation: '藤原顕輔。詞花集の撰者。'
  },
  {
    id: 80, author: '待賢門院堀河',
    kamiNoKu: 'ながからむ 心も知らず 黒髪の',
    shimoNoKu: '乱れて今朝は 物をこそ思へ',
    kimariji: 'ながか', leadingChar: 'な',
    translation: '末長いというあなたの心もわからず、黒髪が乱れるように、今朝は物思いに心も乱れていることよ。',
    explanation: '待賢門院璋子に仕えた女房。'
  },
  {
    id: 81, author: '後徳大寺左大臣',
    kamiNoKu: 'ほととぎす 鳴きつる方を ながむれば',
    shimoNoKu: 'ただ有明の 月ぞのこれる',
    kimariji: 'ほ', leadingChar: 'ほ',
    translation: 'ほととぎすが鳴いた方を眺めてみると、ただ有明の月がかすかに残っているばかりだった。',
    explanation: '藤原実定。風雅の人として知られる。'
  },
  {
    id: 82, author: '道因法師',
    kamiNoKu: '思ひわび さても命は あるものを',
    shimoNoKu: '憂きに耐へぬは 涙なりけり',
    kimariji: 'おも', leadingChar: 'お',
    translation: '思い悩みつつもそれでも命は続いているのに、つらさに耐えきれずこぼれるのは涙であったよ。',
    explanation: '道因法師。歌への執念で知られた。'
  },
  {
    id: 83, author: '皇太后宮大夫俊成',
    kamiNoKu: '世の中よ 道こそなけれ 思ひ入る',
    shimoNoKu: '山の奥にも 鹿ぞ鳴くなる',
    kimariji: 'よのなかよ', leadingChar: 'よ',
    translation: 'この世から逃れる道はないのだ。思い入って籠もった山奥にも、悲しげに鹿が鳴いている。',
    explanation: '藤原俊成。千載集の撰者で新古今時代の礎を築いた。'
  },
  {
    id: 84, author: '藤原清輔朝臣',
    kamiNoKu: 'ながらへば またこのごろや しのばれむ',
    shimoNoKu: '憂しと見し世ぞ 今は恋しき',
    kimariji: 'ながら', leadingChar: 'な',
    translation: '生きながらえたなら、またこの頃のことも懐かしく思うだろうか。つらかった昔も今は恋しい。',
    explanation: '藤原清輔。歌学に通じた論客。'
  },
  {
    id: 85, author: '俊恵法師',
    kamiNoKu: '夜もすがら 物思ふころは 明けやらで',
    shimoNoKu: '閨のひまさへ つれなかりけり',
    kimariji: 'よも', leadingChar: 'よ',
    translation: '一晩中もの思いにふける頃は、なかなか夜が明けず、閨の戸のすき間さえつれなく思われる。',
    explanation: '俊恵法師。歌林苑を主宰した鴨長明の師。'
  },
  {
    id: 86, author: '西行法師',
    kamiNoKu: '嘆けとて 月やは物を 思はする',
    shimoNoKu: 'かこちがほなる わが涙かな',
    kimariji: 'なげけ', leadingChar: 'な',
    translation: '嘆けといって月が物思いをさせるのだろうか、いや、月のせいにしてこぼれるのは私の涙だ。',
    explanation: '西行法師。漂泊の歌人として名高い。'
  },
  {
    id: 87, author: '寂蓮法師',
    kamiNoKu: '村雨の 露もまだひぬ まきの葉に',
    shimoNoKu: '霧立ちのぼる 秋の夕暮れ',
    kimariji: 'む', leadingChar: 'む',
    translation: 'にわか雨の露もまだ乾かぬ槙の葉に、霧が立ちのぼってゆく秋の夕暮れよ。',
    explanation: '寂蓮法師。新古今時代を代表する歌人。三夕の歌のひとつ。'
  },
  {
    id: 88, author: '皇嘉門院別当',
    kamiNoKu: '難波江の 芦のかりねの ひとよゆゑ',
    shimoNoKu: 'みをつくしてや 恋ひ渡るべき',
    kimariji: 'なにはえ', leadingChar: 'な',
    translation: '難波江の芦の刈り根のひと節のような一夜の契りゆえに、身を尽くして恋し続けねばならぬのか。',
    explanation: '皇嘉門院に仕えた女房。掛詞を連ねた技巧の歌。'
  },
  {
    id: 89, author: '式子内親王',
    kamiNoKu: '玉の緒よ 絶えなば絶えね ながらへば',
    shimoNoKu: '忍ぶることの 弱りもぞする',
    kimariji: 'たまの', leadingChar: 'た',
    translation: '玉の緒よ、絶えるなら絶えてしまえ。このまま長らえたら、堪え忍ぶ力が弱ってしまうから。',
    explanation: '後白河院皇女。激情を秘めた忍ぶ恋の名歌。'
  },
  {
    id: 90, author: '殷富門院大輔',
    kamiNoKu: '見せばやな 雄島のあまの 袖だにも',
    shimoNoKu: 'ぬれにぞぬれし 色は変はらず',
    kimariji: 'みせ', leadingChar: 'み',
    translation: 'お見せしたいものだ。雄島の漁師の袖でさえぬれにぬれても色は変わらぬのに、血の涙で色変わった私の袖を。',
    explanation: '殷富門院に仕えた女房。'
  },
  {
    id: 91, author: '後京極摂政前太政大臣',
    kamiNoKu: 'きりぎりす 鳴くや霜夜の さむしろに',
    shimoNoKu: '衣かたしき ひとりかも寝む',
    kimariji: 'きり', leadingChar: 'き',
    translation: 'こおろぎが鳴いている、霜の降りた冷たいむしろに、衣の片袖を敷いてひとりで寝るのだろうか。',
    explanation: '藤原良経。新古今集の代表的歌人。'
  },
  {
    id: 92, author: '二条院讃岐',
    kamiNoKu: 'わが袖は 潮干に見えぬ 沖の石の',
    shimoNoKu: '人こそ知らね 乾く間もなし',
    kimariji: 'わがそ', leadingChar: 'わ',
    translation: '私の袖は、潮が引いても現れない沖の石のように、人は知らないけれど涙で乾く間もない。',
    explanation: '源頼政の娘。新古今時代を代表する女歌人。'
  },
  {
    id: 93, author: '鎌倉右大臣',
    kamiNoKu: '世の中は 常にもがもな 渚こぐ',
    shimoNoKu: 'あまのを舟の 綱手かなしも',
    kimariji: 'よのなかは', leadingChar: 'よ',
    translation: 'この世はいつまでもこうであってほしい。渚を漕ぐ漁師の小舟を綱手で引くさまのいとしさよ。',
    explanation: '源実朝。万葉調の力強い歌人。暗殺された悲劇の将軍歌人。'
  },
  {
    id: 94, author: '参議雅経',
    kamiNoKu: 'み吉野の 山の秋風 さ夜ふけて',
    shimoNoKu: 'ふるさと寒く 衣うつなり',
    kimariji: 'みよ', leadingChar: 'み',
    translation: '吉野の山の秋風が夜更けて吹きわたり、旧都が寒々と砧を打つ音が聞こえてくる。',
    explanation: '藤原雅経。新古今集の撰者の一人。'
  },
  {
    id: 95, author: '前大僧正慈円',
    kamiNoKu: 'おほけなく うき世の民に おほふかな',
    shimoNoKu: 'わが立つ杣に 墨染の袖',
    kimariji: 'おほけ', leadingChar: 'お',
    translation: '身の程知らずにも、この憂き世の民を覆うことだ。比叡山に住む私の墨染めの袖で。',
    explanation: '九条兼実の弟。天台座主。'
  },
  {
    id: 96, author: '入道前太政大臣',
    kamiNoKu: '花さそふ 嵐の庭の 雪ならで',
    shimoNoKu: 'ふりゆくものは わが身なりけり',
    kimariji: 'はなさ', leadingChar: 'は',
    translation: '花を誘って散らす嵐の庭は雪のようだが、真にふりゆくものは我が身なのだなあ。',
    explanation: '西園寺公経。「ふり」に「降り」「古り」を掛ける。'
  },
  {
    id: 97, author: '権中納言定家',
    kamiNoKu: '来ぬ人を まつほの浦の 夕なぎに',
    shimoNoKu: '焼くや藻塩の 身もこがれつつ',
    kimariji: 'こぬ', leadingChar: 'こ',
    translation: '来ぬ人を待つ、松帆の浦の夕凪に焼く藻塩のように、わが身も恋いこがれ続けている。',
    explanation: '藤原定家。新古今集撰者で百人一首の撰者。'
  },
  {
    id: 98, author: '従二位家隆',
    kamiNoKu: '風そよぐ 奈良の小川の 夕暮れは',
    shimoNoKu: 'みそぎぞ夏の しるしなりける',
    kimariji: 'かぜそ', leadingChar: 'か',
    translation: '風がそよぐ奈良の小川の夕暮れは秋めいているが、禊の行事だけが夏のしるしとなっていることよ。',
    explanation: '藤原家隆。定家と並ぶ新古今の大家。'
  },
  {
    id: 99, author: '後鳥羽院',
    kamiNoKu: '人も愛し 人も恨めし あぢきなく',
    shimoNoKu: '世を思ふゆゑに 物思ふ身は',
    kimariji: 'ひとも', leadingChar: 'ひ',
    translation: '人を愛しくも思い、また恨めしくも思う。つまらない世を思うがゆえに物思いに沈むこの身であるよ。',
    explanation: '第82代天皇。新古今和歌集編纂を主導し、承久の乱で隠岐に配流。'
  },
  {
    id: 100, author: '順徳院',
    kamiNoKu: 'ももしきや 古き軒端の しのぶにも',
    shimoNoKu: 'なほあまりある 昔なりけり',
    kimariji: 'もも', leadingChar: 'も',
    translation: '宮中の古い軒端のしのぶ草を見るにつけても、偲びきれぬほど昔のことが思い出される。',
    explanation: '第84代天皇。承久の乱で佐渡に配流。百首の結びを飾る。'
  },
];

// 先頭の文字別カテゴリー
export const LEADING_CHAR_CATEGORIES = [
  { key: 'musumefusahose', label: 'むすめふさほせ', count: 7,  chars: ['む','す','め','ふ','さ','ほ','せ'] },
  { key: 'utsushimoyu',    label: 'うつしもゆ',     count: 10, chars: ['う','つ','し','も','ゆ'] },
  { key: 'ichihiki',       label: 'いちひき',       count: 12, chars: ['い','ち','ひ','き'] },
  { key: 'hayayoka',       label: 'はやよか',       count: 16, chars: ['は','や','よ','か'] },
  { key: 'mi',             label: 'み',             count: 5,  chars: ['み'] },
  { key: 'ta',             label: 'た',             count: 6,  chars: ['た'] },
  { key: 'ko',             label: 'こ',             count: 6,  chars: ['こ'] },
  { key: 'o',              label: 'お',             count: 7,  chars: ['お'] },
  { key: 'wa',             label: 'わ',             count: 7,  chars: ['わ'] },
  { key: 'na',             label: 'な',             count: 8,  chars: ['な'] },
  { key: 'a',              label: 'あ',             count: 16, chars: ['あ'] },
];

// 間違えやすい札グループ
// cardIds は下の句が似通って紛らわしい札の組。例:
//   araza_ogu: 56「いまひとたびのあふこともがな」と 26「いまひとたびのみゆき待たなむ」
export const CONFUSING_GROUPS = [
  { key: 'araza_ogu',           label: 'あらざ／おぐ',                 cardIds: [26, 56] },
  { key: 'akino_kimi_ha',       label: 'あきの／きみ・は',             cardIds: [1, 15] },
  { key: 'naniwae_wabi',        label: 'なにわえ／わび',               cardIds: [20, 88] },
  { key: 'yae_wagaso',          label: 'やえ／わがそ',                 cardIds: [47, 92] },
  { key: 'tsuki_hanano',        label: 'つき／はなの',                 cardIds: [9, 23] },
  { key: 'nagaka_michi',        label: 'ながか／みち',                 cardIds: [14, 80] },
  { key: 'nanishi_wata_ya',     label: 'なにし／わた・や',             cardIds: [11, 25] },
  { key: 'kiri_harusu',         label: 'きり／はるす',                 cardIds: [2, 91] },
  { key: 'ashi_kimi_o_yamaga',  label: 'あし／きみ・お／やまが',       cardIds: [3, 32, 50] },
  { key: 'ura_kokoroni_tsuku',  label: 'うら／こころに／つく',         cardIds: [13, 65, 68] },
  { key: 'natsu_me_wata_ko',    label: 'なつ／め／わた・こ',           cardIds: [36, 57, 76] },
  { key: 'ake_momo',            label: 'あけ／もも',                   cardIds: [52, 100] },
  { key: 'asaji_yono_ha',       label: 'あさじ／よの・は',             cardIds: [39, 93] },
  { key: 'ini_wasure',          label: 'いに／わすれ',                 cardIds: [54, 61] },
  { key: 'sa_mikano',           label: 'さ／みかの',                   cardIds: [27, 70] },
  { key: 'moro_hitoha',         label: 'もろ／ひとは',                 cardIds: [35, 66] },
  { key: 'chigirio_naniwaga',   label: 'ちぎりお／なにわが',           cardIds: [19, 75] },
  { key: 'tachi_tare',          label: 'たち／たれ',                   cardIds: [16, 34] },
  { key: 'hitomo_wagai',        label: 'ひとも／わがい',               cardIds: [8, 99] },
  { key: 'shimo_hito',          label: '下の句が「ひと」で始まる句',   cardIds: [11, 25, 28, 38, 41, 44, 47, 63, 92] },
  { key: 'shimo_waka',          label: '下の句が「わか」で始まる句',   cardIds: [1, 9, 15, 23, 95] },
];

// 先頭文字カテゴリーに該当する札IDを取得
export function getCardIdsByLeadingCategory(categoryKey) {
  const cat = LEADING_CHAR_CATEGORIES.find(c => c.key === categoryKey);
  if (!cat) return [];
  return cards.filter(c => cat.chars.includes(c.leadingChar)).map(c => c.id);
}

// 札めくり画面表示用の下の句ひらがな表記。
// 競技用百人一首の取り札に倣い、濁点・半濁点は付けない。
export const shimoNoKuKana = {
  1:  'わかころもてはつゆにぬれつつ',
  2:  'ころもほすてふあまのかくやま',
  3:  'なかなかしよをひとりかもねむ',
  4:  'ふしのたかねにゆきはふりつつ',
  5:  'こゑきくときそあきはかなしき',
  6:  'しろきをみれはよそふけにける',
  7:  'みかさのやまにいてしつきかも',
  8:  'よをうちやまとひとはいふなり',
  9:  'わかみよにふるなかめせしまに',
  10: 'しるもしらぬもあふさかのせき',
  11: 'ひとにはつけよあまのつりふね',
  12: 'をとめのすかたしはしととめむ',
  13: 'こひそつもりてふちとなりぬる',
  14: 'みたれそめにしわれならなくに',
  15: 'わかころもてにゆきはふりつつ',
  16: 'まつとしきかはいまかへりこむ',
  17: 'からくれなゐにみつくくるとは',
  18: 'ゆめのかよひちひとめよくらむ',
  19: 'あはてこのよをすくしてよとや',
  20: 'みをつくしてもあはむとそおもふ',
  21: 'ありあけのつきをまちいてつるかな',
  22: 'むへやまかせをあらしといふらむ',
  23: 'わかみひとつのあきにはあらねと',
  24: 'もみちのにしきかみのまにまに',
  25: 'ひとにしられてくるよしもかな',
  26: 'いまひとたひのみゆきまたなむ',
  27: 'いつみきとてかこひしかるらむ',
  28: 'ひとめもくさもかれぬとおもへは',
  29: 'おきまとはせるしらきくのはな',
  30: 'あかつきはかりうきものはなし',
  31: 'よしののさとにふれるしらゆき',
  32: 'なかれもあへぬもみちなりけり',
  33: 'しつこころなくはなのちるらむ',
  34: 'まつもむかしのともならなくに',
  35: 'はなそむかしのかににほひける',
  36: 'くものいつこにつきやとるらむ',
  37: 'つらぬきとめぬたまそちりける',
  38: 'ひとのいのちのをしくもあるかな',
  39: 'あまりてなとかひとのこひしき',
  40: 'ものやおもふとひとのとふまて',
  41: 'ひとしれすこそおもひそめしか',
  42: 'すゑのまつやまなみこさしとは',
  43: 'むかしはものをおもはさりけり',
  44: 'ひとをもみをもうらみさらまし',
  45: 'みのいたつらになりぬへきかな',
  46: 'ゆくへもしらぬこひのみちかな',
  47: 'ひとこそみえねあきはきにけり',
  48: 'くたけてものをおもふころかな',
  49: 'ひるはきえつつものをこそおもへ',
  50: 'なかくもかなとおもひけるかな',
  51: 'さしもしらしなもゆるおもひを',
  52: 'なほうらめしきあさほらけかな',
  53: 'いかにひさしきものとかはしる',
  54: 'けふをかきりのいのちともかな',
  55: 'なこそなかれてなほきこえけれ',
  56: 'いまひとたひのあふこともかな',
  57: 'くもかくれにしよはのつきかな',
  58: 'いてそよひとをわすれやはする',
  59: 'かたふくまてのつきをみしかな',
  60: 'またふみもみすあまのはしたて',
  61: 'けふここのへににほひぬるかな',
  62: 'よにあふさかのせきはゆるさし',
  63: 'ひとつてならていふよしもかな',
  64: 'あらはれわたるせせのあしろき',
  65: 'こひにくちなむなこそをしけれ',
  66: 'はなよりほかにしるひともなし',
  67: 'かひなくたたむなこそをしけれ',
  68: 'こひしかるへきよはのつきかな',
  69: 'たつたのかはのにしきなりけり',
  70: 'いつこもおなしあきのゆふくれ',
  71: 'あしのまろやにあきかせそふく',
  72: 'かけしやそてのぬれもこそすれ',
  73: 'とやまのかすみたたすもあらなむ',
  74: 'はけしかれとはいのらぬものを',
  75: 'あはれことしのあきもいぬめり',
  76: 'くもゐにまかふおきつしらなみ',
  77: 'われてもすゑにあはむとそおもふ',
  78: 'いくよねさめぬすまのせきもり',
  79: 'もれいつるつきのかけのさやけさ',
  80: 'みたれてけさはものをこそおもへ',
  81: 'たたありあけのつきそのこれる',
  82: 'うきにたへぬはなみたなりけり',
  83: 'やまのおくにもしかそなくなる',
  84: 'うしとみしよそいまはこひしき',
  85: 'ねやのひまさへつれなかりけり',
  86: 'かこちかほなるわかなみたかな',
  87: 'きりたちのほるあきのゆふくれ',
  88: 'みをつくしてやこひわたるへき',
  89: 'しのふることのよわりもそする',
  90: 'ぬれにそぬれしいろはかはらす',
  91: 'ころもかたしきひとりかもねむ',
  92: 'ひとこそしらねかわくまもなし',
  93: 'あまのをふねのつなてかなしも',
  94: 'ふるさとさむくころもうつなり',
  95: 'わかたつそまにすみそめのそて',
  96: 'ふりゆくものはわかみなりけり',
  97: 'やくやもしほのみもこかれつつ',
  98: 'みそきそなつのしるしなりける',
  99: 'よをおもふゆゑにものおもふみは',
  100:'なほあまりあるむかしなりけり',
};

// 札めくり用の下の句ひらがなを 3 行に分割する。
// 標準は (5, 5, 残り)。短い句は 2 行または 1 行に収める。
export function splitShimoKana(id) {
  const s = shimoNoKuKana[id] || '';
  if (s.length <= 5) return [s];
  const line1 = s.slice(0, 5);
  const rest = s.slice(5);
  if (rest.length <= 5) return [line1, rest];
  return [line1, rest.slice(0, 5), rest.slice(5)];
}
