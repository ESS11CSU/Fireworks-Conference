export type Lang = "en" | "zh";

const withBase = (path = "") =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const copy = {
  en: {
    langLabel: "EN",
    otherLang: "中文",
    otherHref: withBase("zh/"),
    metaTitle:
      "Firework Conference: Economic Science Society 1st Asia Meeting",
    metaDescription:
      "Firework Conference: Economic Science Society 1st Asia Meeting. Theme: Causal Inference in the Age of AI. November 11–13, 2026, Jiangwan Building, Business School, Central South University, Changsha, Hunan Province, China.",
    splashKicker: "Causal Inference in the Age of AI",
    splashTitle: "Firework Conference",
    splashSubtitle: "Economic Science Society 1st Asia Meeting",
    splashCta: "Enter the meeting",
    skipSplash: "Skip animation",
    themeToLight: "Light",
    themeToDark: "Dark",
    brand: "Firework",
    brandSuffix: "ESS Asia Meeting",
    heroTitleLead: "Firework Conference:",
    heroTitleRest: "Economic Science Society 1st Asia Meeting",
    nav: [
      { href: "#about", label: "About" },
      { href: "#topics", label: "Topics" },
      { href: "#co-chairs", label: "Co-Chairs" },
      { href: "#speakers", label: "Speakers" },
      { href: "#submit", label: "Submit" },
      { href: "#organizers", label: "Organizers" },
    ],
    heroEyebrow: "November 11–13, 2026 · Changsha, China",
    heroTitle: "Firework Conference: Economic Science Society 1st Asia Meeting",
    heroTheme: "Causal Inference in the Age of AI",
    heroLeadTitle: "Firework Conference: Economic Science Society 1st Asia Meeting",
    heroLeadOrganizers:
      "Organizers: Central South University; Economic Science Society",
    heroLeadHost: "Host: Business School, Central South University",
    heroPrimary: "Submit a paper",
    heroSecondary: "Speakers",
    facts: [
      { label: "Dates", value: "11\u201113 Nov 2026" },
      { label: "Venue", value: "Changsha, China" },
      { label: "Deadline", value: "23 Oct 2026 AoE" },
    ],
    aboutImageAlt: "Firework Conference decorative banner with fireworks and a city skyline",
    aboutKicker: "About the meeting",
    aboutTitle: "Causal Inference in the Age of AI",
    aboutBody:
      "With the rapid development of artificial intelligence and the increasing availability of economic data, causal inference has become central to the study of economic behavior, financial markets, and policy interventions. The Economic Science Society encourages research that draws on a range of empirical and experimental approaches, including observational data, controlled experiments, econometric methods, and artificial intelligence. Bringing these approaches together can improve the identification of causal effects and deepen our understanding of the mechanisms underlying economic outcomes.",
    aboutBody2:
      "This conference will bring together scholars working across causal inference, experimental and econometric methods, artificial intelligence, behavioral and computational approaches, and a wide range of applications in economics, finance, and management. It will provide a forum for research that advances the identification of causal effects and the study of economic mechanisms. The conference also seeks to strengthen the connections between China-based research and the international academic community, and to support evidence-based economic and financial decision-making and the development of an independent knowledge system for the social sciences in China.",
    organizersLabel: "Organizers",
    organizersSectionTitle: "Organizers and host",
    organizersValue: "Central South University; Economic Science Society",
    hostLabel: "Host",
    hostValue: "Business School, Central South University",
    orgs: [
      {
        title: "Economic Science Society",
        href: "https://economicsciencesociety.org/",
        body: "The Economic Science Society (ESS) is dedicated to advancing the frontier of causal inference so that economic insights are grounded in scientific rigor. It promotes methodological diversity—including observational-data methods, experimental design and analysis, and the integration of AI into causal research—and prioritizes rigorous identification to support evidence-based policy.",
      },
      {
        title: "Central South University",
        href: "https://www.csu.edu.cn/",
        body: "Central South University (CSU) is located in Changsha, Hunan Province. It is a key university under Project 985 and Project 211, a Category A university under China’s World-Class University initiative, and part of the national “Double First-Class” initiative. CSU has ranked among the world’s top 100 universities in the Academic Ranking of World Universities (ARWU) for three consecutive years, and in 2025 ranked 13th in China and 146th in the U.S. News Best Global Universities Rankings 2025–2026.",
      },
      {
        title: "Business School, Central South University",
        href: "https://bs.csu.edu.cn/",
        body: "The Business School of Central South University is among the leading schools in economics and management in China, covering Management Science and Engineering, Business Administration, and Applied Economics. Management Science and Engineering is a National Key Discipline with an A-level rating in the fifth round of national discipline evaluation, and Economics and Business at CSU ranks among the global top 1% in ESI. The school has earned AACSB and AMBA accreditations, placing it among the top 6% of business schools worldwide.",
      },
    ],
    topicsKicker: "Call for papers",
    topicsTitle: "Topics",
    topicsNote:
      "The conference invites high-quality research papers from scholars and researchers at universities, research institutions, government agencies, corporate research organizations, and related fields. Topics of interest include, but are not limited to:",
    topics: [
      "Causal Inference and Econometric Methods",
      "Experimental Economics, Field Experiments, and Randomized Controlled Trials",
      "Artificial Intelligence, Machine Learning, and Causal Inference",
      "Structural, Computational, Bayesian, and Simulation-Based Methods",
      "Behavioral Economics, Decision-Making, and Human-AI Interaction",
      "Algorithms, Networks, and Market Design",
      "Text, Big Data, and Unstructured Data Methods",
      "Causal Inference in Finance, Accounting, Management, and Organizations",
      "Applied Causal Inference and Policy Evaluation",
    ],
    programKicker: "Program",
    programTitle: "Conference program",
    programDates: "November 11–13, 2026",
    programNote: "Coming soon",
    programDetail:
      "A detailed session schedule is not yet published in the Call for Papers.",
    speakersKicker: "Speakers",
    speakersTitle: "Keynote and invited speakers",
    speakers: [
      {
        badge: "Keynote Speaker",
        name: "James Heckman",
        role: "University of Chicago",
        photo: withBase("speakers/heckman.jpg"),
        bio: "James J. Heckman is an internationally renowned economist and the recipient of the 2000 Nobel Prize in Economic Sciences. He is the Henry Schultz Distinguished Service Professor of Economics at the University of Chicago and Director of the Center for the Economics of Human Development. Over the course of his academic career at the University of Chicago, he has held appointments in the Department of Economics, the Harris School of Public Policy, and the Law School. He received the Nobel Prize for pioneering the theory and methods for analyzing selective samples. He is widely recognized for his work in microeconometrics, labor economics, human capital theory, and policy evaluation. His research has appeared in leading international journals including Econometrica, American Economic Review, Journal of Political Economy, Quarterly Journal of Economics, and Review of Economic Studies.",
      },
      {
        badge: "President and Founder of Economic Science Society",
        name: "Daniel Houser",
        role: "George Mason University, Department of Economics",
        photo: withBase("speakers/houser.jpg"),
        bio: "Professor Daniel Houser is the founding president of the Economic Science Society. He is Chair of the Department of Economics at George Mason University and Director of the Interdisciplinary Center for Economic Science. He has collaborated closely with Vernon Smith, a pioneer of experimental economics and recipient of the 2002 Nobel Prize in Economic Sciences. His main research areas include experimental economics, behavioral economics, and neuroeconomics. He has served as editor, associate editor, or editorial board member of journals including Management Science, Experimental Economics, and Journal of Economic Behavior & Organization, and has published papers in journals including PNAS, American Economic Review, Econometrica, Journal of Finance, Management Science, and Experimental Economics.",
      },
      {
        badge: "Invited Speaker",
        name: "Jie Zheng",
        role: "The Center for Economic Research, Shandong University",
        photo: withBase("speakers/zheng.jpg"),
        bio: "Jie Zheng is Professor at the Center for Economic Research, Shandong University, Distinguished Professor of Shandong University, and Director of the Center for Research in Economic Theory and Experiments (CREATE). His research interests include information economics, experimental economics, behavioral economics, and industrial organization. His research has been published in journals including American Economic Review (Papers and Proceedings), Games and Economic Behavior, Management Science, and Nature Communications.",
      },
      {
        badge: "Invited Speaker",
        name: "Te Bao",
        role: "Nanyang Technological University, Singapore",
        photo: withBase("speakers/bao.jpg"),
        bio: "Te Bao is Associate Professor of Economics at the School of Social Sciences, Nanyang Technological University, Singapore. His research interests include experimental economics, behavioral finance, contract theory, and real estate economics. His research has been published in journals including The Economic Journal, European Economic Review, Experimental Economics, Journal of Economic Behavior & Organization, and Journal of Economic Dynamics and Control.",
      },
      {
        badge: "Invited Speaker",
        name: "Xiangdong Qin",
        role: "Shanghai Jiao Tong University",
        photo: withBase("speakers/qin.jpg"),
        bio: "Xiangdong Qin is a Professor of Economics and Director of the Smith Experimental Economics Research Center at Shanghai Jiao Tong University. His research focuses on experimental economics and behavioral economics and often involves laboratory and field experiments. He has published papers in journals including American Economic Review: Insights, Experimental Economics, Journal of Economic Behavior and Organization, Journal of Risk and Uncertainty, Public Choice, and PNAS.",
      },
      {
        badge: "Invited Speaker",
        name: "Erte Xiao",
        role: "Monash University, Department of Economics",
        photo: withBase("speakers/xiao.jpg"),
        bio: "Erte Xiao is a professor in the Department of Economics at Monash University. She conducts research on the motivational and behavioral consequences of extrinsic incentives and social preferences on decisions. Her work has been published in journals such as PNAS, The Economic Journal, Journal of Public Economics, Games and Economic Behavior, and Management Science.",
      },
    ],
    chairsLabel: "Conference Co-Chairs",
    chairs: [
      {
        name: "Daniel Houser",
        photo: withBase("speakers/houser.jpg"),
        posts: [
          { role: "Founding President", org: "Economic Science Society" },
          { role: "Chair", org: "Department of Economics, George Mason University" },
          {
            role: "Director",
            org: "Interdisciplinary Center for Economic Science, George Mason University",
          },
        ],
      },
      {
        name: "Zongrun Wang",
        photo: withBase("speakers/wang.jpg"),
        posts: [
          { role: "Dean", org: "Business School, Central South University" },
        ],
      },
      {
        name: "Yulei Rao",
        photo: withBase("speakers/rao.jpg"),
        posts: [
          {
            role: "Director",
            org: "Financial Innovation Research Center, Central South University",
          },
        ],
      },
    ],
    committeeKicker: "Committee",
    committeeLabel: "Organizing Committee",
    committee: [
      {
        name: "Zijun Luo",
        role: "University of Nebraska at Omaha, Department of Economics",
      },
      {
        name: "Jianxin Wang",
        role: "Business School, Central South University",
      },
      {
        name: "Ping Wei",
        role: "Business School, Central South University",
      },
      {
        name: "Runfeng Yang",
        role: "Business School, Central South University",
      },
      {
        name: "Ruoqi Yao",
        role: "Business School, Central South University",
      },
      {
        name: "Qian Zhang",
        role: "Business School, Central South University",
      },
      {
        name: "Jie Zheng",
        role: "The Center for Economic Research, Shandong University",
      },
    ],
    submitKicker: "Submission and registration",
    submitTitle: "Paper and session submissions",
    submitPaperTitle: "Submit a paper",
    submitLangNote: "Submissions may be written in either Chinese or English.",
    submitInvite: "Authors are invited to submit the following materials:",
    submitMaterials: [
      "Paper title",
      "Paper presenter name, affiliation, and email address",
      "Coauthor(s) name, affiliation, and email address",
      "Abstract",
      "Presentation language (Chinese or English)",
    ],
    submitHow:
      "Please send the submission materials to the designated conference email address. The email subject line should follow the format:",
    submitSubject: "ESS Submission + Author Name + Affiliation",
    submitSessionTitle: "Submit a session proposal",
    submitSessionLead:
      "We also welcome proposals for organized sessions centered on a common research theme. Each proposed session should normally consist of 3–4 papers.",
    submitSessionInvite: "The session organizers are invited to submit the following materials:",
    submitSessionMaterials: [
      "The proposed session title",
      "A brief description of the session",
      "Paper titles and abstracts",
      "The names and affiliations of all presenters",
    ],
    submitSessionHow:
      "Please send the submission materials to the designated conference email address. The email subject line should follow the format:",
    submitSessionSubject: "ESS Submission + Session Name + Organizer Name + Affiliation",
    submitEmailLabel: "Submission email",
    submitEmail: "essmeeting@csu.edu.cn",
    reviewNote:
      "All submissions will be reviewed by a panel of experts. Authors of selected papers will be invited to present their research at the conference.",
    deadlineLabel: "Submission deadline",
    deadlineValue: "October 23, 2026, anywhere on Earth (AoE)",
    acceptanceLabel: "Notification of acceptance",
    acceptanceValue: "By October 28, 2026",
    feesLabel: "Registration fee",
    fees: [
      { label: "Students", value: "RMB 500" },
      { label: "Faculty and other participants", value: "RMB 1,000" },
    ],
    mealsLabel: "Meals, travel, and accommodation",
    mealsValue:
      "The conference will provide lunch on Thursday and Friday, as well as dinner on Thursday. Participants are responsible for their own travel and accommodation expenses.",
    venueKicker: "Venue",
    venueTitle: "Jiangwan Building, Business School, Central South University",
    venueBody:
      "Changsha, Hunan Province, China. Transportation and venue details beyond this Call for Papers listing are to be announced.",
    venueFacts: [
      { label: "Building", value: "Jiangwan Building" },
      { label: "Host", value: "Business School, Central South University" },
      { label: "City", value: "Changsha, Hunan Province, China" },
    ],
    contactKicker: "Contact",
    contactTitle: "Conference contact",
    contacts: [
      {
        name: "Zhuolin Wang / 王卓玲",
        role: "Transportation and Venue Information",
        phone: "+86-13007449609",
      },
      {
        name: "Jianxin Wang / 王建新",
        role: "Paper Submission and Acceptance",
        phone: "+86-13873165114",
      },
    ],
    footerCredit:
      "Firework Conference: Economic Science Society 1st Asia Meeting",
    footerNote: "Conference information follows the Call for Papers.",
    essLinkLabel: "Economic Science Society",
    essHref: "https://economicsciencesociety.org/",
  },
  zh: {
    langLabel: "中文",
    otherLang: "EN",
    otherHref: withBase(),
    metaTitle: "烟花会议：经济科学学会第一届亚洲会议",
    metaDescription:
      "烟花会议：经济科学学会第一届亚洲会议。主题：人工智能时代的因果推断。2026年11月11–13日，中南大学商学院江湾楼，中国湖南省长沙市。",
    splashKicker: "人工智能时代的因果推断",
    splashTitle: "烟花会议",
    splashSubtitle: "经济科学学会第一届亚洲会议",
    splashCta: "进入会议",
    skipSplash: "跳过动画",
    themeToLight: "亮色",
    themeToDark: "暗色",
    brand: "烟花会议",
    brandSuffix: "经济科学学会亚洲会议",
    heroTitleLead: "烟花会议：",
    heroTitleRest: "经济科学学会第一届亚洲会议",
    nav: [
      { href: "#about", label: "关于" },
      { href: "#topics", label: "议题" },
      { href: "#co-chairs", label: "共同主席" },
      { href: "#speakers", label: "演讲人" },
      { href: "#submit", label: "投稿" },
      { href: "#organizers", label: "主办" },
    ],
    heroEyebrow: "2026年11月11\u201113日 · 中国长沙",
    heroTitle: "烟花会议：经济科学学会第一届亚洲会议",
    heroTheme: "人工智能时代的因果推断",
    heroLeadTitle: "烟花会议：经济科学学会第一届亚洲会议",
    heroLeadOrganizers: "主办单位：中南大学；经济科学学会",
    heroLeadHost: "承办单位：中南大学商学院",
    heroPrimary: "论文投稿",
    heroSecondary: "演讲人",
    facts: [
      { label: "日期", value: "2026年11月11\u201113日" },
      { label: "地点", value: "中国长沙" },
      { label: "截稿", value: "2026年10月23日（全球任意时区）" },
    ],
    aboutImageAlt: "烟花与城市天际线装饰图",
    aboutKicker: "关于会议",
    aboutTitle: "人工智能时代的因果推断",
    aboutBody:
      "随着人工智能迅速发展、经济数据日益丰富，因果推断已成为研究经济行为、金融市场与政策干预的核心问题。经济科学学会鼓励综合运用多种经验与实验方法，包括观测数据、受控实验、计量经济学方法与人工智能。将这些方法结合起来，有助于更好地识别因果效应，并深化对经济结果背后机制的理解。",
    aboutBody2:
      "本次会议将汇聚从事因果推断、实验与计量方法、人工智能、行为与计算方法，以及经济学、金融与管理等广泛应用研究的学者。会议为推进因果效应识别与经济机制研究提供交流平台，并致力于加强中国研究与国际学术共同体之间的联系，支持循证的经济与金融决策，以及中国社会科学自主知识体系的发展。",
    organizersLabel: "主办单位",
    organizersSectionTitle: "主办与承办",
    organizersValue: "中南大学；经济科学学会",
    hostLabel: "承办单位",
    hostValue: "中南大学商学院",
    orgs: [
      {
        title: "经济科学学会",
        href: "https://economicsciencesociety.org/",
        body: "经济科学学会致力于推进因果推断前沿，使经济学洞见建立在科学严谨之上。学会倡导方法多样性，涵盖观测数据方法、实验设计与分析，以及将人工智能融入因果研究，并通过严谨识别支持循证政策。",
      },
      {
        title: "中南大学",
        href: "https://www.csu.edu.cn/",
        body: "中南大学位于湖南省长沙市，是国家“985工程”“211工程”重点建设高校，并入选世界一流大学建设高校（A类）与国家“双一流”建设。中南大学已连续三年进入软科世界大学学术排名世界百强。2025年，在《美国新闻与世界报道》2025–2026世界大学排行中位列中国第13、全球第146。",
      },
      {
        title: "中南大学商学院",
        href: "https://bs.csu.edu.cn/",
        body: "中南大学商学院是中国经济学与管理学领域的领先学院之一，学科覆盖管理科学与工程、工商管理与应用经济学。管理科学与工程为国家重点学科，在第五轮学科评估中获评A类；经济与商学学科进入基本科学指标数据库全球前1%。学院已获得国际商学院协会认证与工商管理硕士协会认证，跻身全球商学院前6%。",
      },
    ],
    topicsKicker: "征稿",
    topicsTitle: "议题",
    topicsNote:
      "会议诚挚邀请高校、科研机构、政府部门、企业研究机构及相关领域的学者与研究人员提交高质量研究论文。议题包括但不限于：",
    topics: [
      "因果推断与计量经济学方法",
      "实验经济学、田野实验与随机对照试验",
      "人工智能、机器学习与因果推断",
      "结构、计算、贝叶斯与模拟方法",
      "行为经济学、决策与人类—人工智能交互",
      "算法、网络与市场设计",
      "文本、大数据与非结构化数据方法",
      "金融、会计、管理与组织中的因果推断",
      "应用因果推断与政策评估",
    ],
    programKicker: "日程",
    programTitle: "会议日程",
    programDates: "2026年11月11–13日",
    programNote: "待公布",
    programDetail: "征稿启事尚未公布分会场与时段安排。",
    speakersKicker: "演讲人",
    speakersTitle: "主旨与邀请演讲人",
    speakers: [
      {
        badge: "主旨演讲",
        name: "詹姆斯·赫克曼",
        role: "芝加哥大学",
        photo: withBase("speakers/heckman.jpg"),
        bio: "詹姆斯·赫克曼是国际著名经济学家、2000年诺贝尔经济学奖获得者。他现为芝加哥大学亨利·舒尔茨经济学杰出贡献教授，并担任人类发展经济学中心主任。他在芝加哥大学的学术生涯中，曾任职于经济系、哈里斯公共政策学院与法学院。他因在选择性样本分析的理论与方法上的开创性贡献而获得诺贝尔经济学奖。他被广泛认为是微观计量经济学、劳动经济学、人力资本理论与政策评估领域最具影响力的学者之一。其成果发表于《计量经济学杂志》《美国经济评论》《政治经济学杂志》《经济学季刊》《经济研究评论》等国际顶尖经济学期刊。",
      },
      {
        badge: "经济科学学会创始主席",
        name: "Daniel Houser",
        role: "乔治梅森大学经济系",
        photo: withBase("speakers/houser.jpg"),
        bio: "Daniel Houser 教授是经济科学学会创始会长。他是乔治梅森大学经济系主任、跨学科经济科学中心主任。他与实验经济学先驱、2002年诺贝尔经济学奖获得者 Vernon Smith 密切合作。主要研究领域包括实验经济学、行为经济学与神经经济学。他曾任《管理科学》《实验经济学》《经济行为与组织杂志》等学术期刊的主编、副主编或编委会成员，并在《美国国家科学院院刊》《美国经济评论》《计量经济学杂志》《金融杂志》《管理科学》《实验经济学》等期刊发表论文。",
      },
      {
        badge: "邀请演讲",
        name: "郑捷",
        role: "山东大学经济研究中心",
        photo: withBase("speakers/zheng.jpg"),
        bio: "郑捷为山东大学经济研究中心教授、山东大学特聘教授，以及经济理论与实验研究中心主任。研究兴趣包括信息经济学、实验经济学、行为经济学与产业组织。研究成果发表于《美国经济评论（论文与会议录）》《博弈与经济行为》《管理科学》《自然·通讯》等期刊。",
      },
      {
        badge: "邀请演讲",
        name: "包特",
        role: "新加坡南洋理工大学",
        photo: withBase("speakers/bao.jpg"),
        bio: "包特为新加坡南洋理工大学社会科学学院经济学副教授。研究兴趣包括实验经济学、行为金融、合同理论与房地产经济学。研究成果发表于《经济学杂志》《欧洲经济评论》《实验经济学》《经济行为与组织杂志》《经济动态与控制杂志》等期刊。",
      },
      {
        badge: "邀请演讲",
        name: "秦向东",
        role: "上海交通大学",
        photo: withBase("speakers/qin.jpg"),
        bio: "秦向东是上海交通大学经济学教授、Smith实验经济学研究中心主任。主要研究领域为实验经济学与行为经济学，研究经常采用实验室实验与田野实验。他在《美国经济评论：洞见》《实验经济学》《经济行为与组织杂志》《风险与不确定性杂志》《公共选择》《美国国家科学院院刊》等同行评议期刊发表论文。",
      },
      {
        badge: "邀请演讲",
        name: "肖尔特",
        role: "莫纳什大学经济系",
        photo: withBase("speakers/xiao.jpg"),
        bio: "肖尔特是莫纳什大学经济系教授。她的研究旨在理解外在激励与社会偏好对决策的动机与行为后果。研究成果发表于《美国国家科学院院刊》《经济学杂志》《公共经济学杂志》《博弈与经济行为》《管理科学》等期刊。",
      },
    ],
    chairsLabel: "会议共同主席",
    chairs: [
      {
        name: "Daniel Houser",
        photo: withBase("speakers/houser.jpg"),
        posts: [
          { role: "创始主席", org: "经济科学学会" },
          { role: "系主任", org: "乔治梅森大学经济系" },
          {
            role: "主任",
            org: "乔治梅森大学跨学科经济科学中心（Interdisciplinary Center for Economic Science）",
          },
        ],
      },
      {
        name: "王宗润",
        photo: withBase("speakers/wang.jpg"),
        posts: [{ role: "院长", org: "中南大学商学院" }],
      },
      {
        name: "饶育蕾",
        photo: withBase("speakers/rao.jpg"),
        posts: [
          {
            role: "主任",
            org: "中南大学金融创新研究中心",
          },
        ],
      },
    ],
    committeeKicker: "委员会",
    committeeLabel: "组织委员会",
    committee: [
      {
        name: "Zijun Luo",
        role: "内布拉斯加大学奥马哈分校经济系",
      },
      {
        name: "王建新",
        role: "中南大学商学院",
      },
      {
        name: "危平",
        role: "中南大学商学院",
      },
      {
        name: "杨润峰",
        role: "中南大学商学院",
      },
      {
        name: "姚若琪",
        role: "中南大学商学院",
      },
      {
        name: "张骞",
        role: "中南大学商学院",
      },
      {
        name: "郑捷",
        role: "山东大学经济研究中心",
      },
    ],
    submitKicker: "投稿与注册",
    submitTitle: "论文与专题分会投稿",
    submitPaperTitle: "论文投稿",
    submitLangNote: "投稿可用中文或英文撰写。",
    submitInvite: "请作者提交以下材料：",
    submitMaterials: [
      "论文题目",
      "报告人姓名、单位与电子邮箱",
      "合作者姓名、单位与电子邮箱",
      "摘要",
      "报告语言（中文或英文）",
    ],
    submitHow: "请将投稿材料发送至会议指定邮箱。邮件主题格式为：",
    submitSubject: "ESS Submission + 作者姓名 + 单位",
    submitSessionTitle: "专题分会投稿",
    submitSessionLead:
      "我们也欢迎围绕同一研究主题组织专题分会。每个拟设分会通常由 3–4 篇论文组成。",
    submitSessionInvite: "请分会组织者提交以下材料：",
    submitSessionMaterials: [
      "拟设专题分会题目",
      "分会简要说明",
      "论文题目与摘要",
      "全部报告人姓名与单位",
    ],
    submitSessionHow: "请将投稿材料发送至会议指定邮箱。邮件主题格式为：",
    submitSessionSubject: "ESS Submission + 分会名称 + 组织者姓名 + 单位",
    submitEmailLabel: "投稿邮箱",
    submitEmail: "essmeeting@csu.edu.cn",
    reviewNote:
      "所有投稿将由专家审稿。入选论文作者将获邀在会议上报告其研究。",
    deadlineLabel: "投稿截止日期",
    deadlineValue: "2026年10月23日（全球任意时区）",
    acceptanceLabel: "录用通知",
    acceptanceValue: "2026年10月28日前",
    feesLabel: "注册费",
    fees: [
      { label: "学生", value: "人民币 500 元" },
      { label: "教师及其他参会者", value: "人民币 1,000 元" },
    ],
    mealsLabel: "餐饮、交通与住宿",
    mealsValue:
      "会议提供周四、周五午餐以及周四晚餐。交通与住宿费用由参会者自理。",
    venueKicker: "会场",
    venueTitle: "中南大学商学院江湾楼",
    venueBody:
      "中国湖南省长沙市。除征稿启事所列信息外，交通与会场细节待公布。",
    venueFacts: [
      { label: "楼宇", value: "江湾楼" },
      { label: "承办", value: "中南大学商学院" },
      { label: "城市", value: "中国湖南省长沙市" },
    ],
    contactKicker: "联系",
    contactTitle: "会议联系人",
    contacts: [
      {
        name: "王卓玲",
        role: "交通与会场信息",
        phone: "+86-13007449609",
      },
      {
        name: "王建新",
        role: "论文投稿与录用",
        phone: "+86-13873165114",
      },
    ],
    footerCredit: "烟花会议：经济科学学会第一届亚洲会议",
    footerNote: "会议信息以征稿启事为准。",
    essLinkLabel: "经济科学学会",
    essHref: "https://economicsciencesociety.org/",
  },
} as const;

export function t(lang: Lang) {
  return copy[lang];
}
