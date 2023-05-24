import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  // articles = [
  //   {
  //       "source": {
  //           "id": "reuters",
  //           "name": "Reuters"
  //       },
  //       "author": null,
  //       "title": "Hales, Buttler lead England to win over Australia in T20 run-fest - Reuters",
  //       "description": "Openers Alex Hales and Jos Buttler blasted half-centuries to lead England to an eight-run win over Australia on Sunday in the first of three warm-up games before the T20 World Cup starts later this month.",
  //       "url": "https://www.reuters.com/lifestyle/sports/hales-buttler-lead-england-win-over-australia-t20-run-fest-2022-10-09/",
  //       "urlToImage": "https://www.reuters.com/resizer/GFODVywvNSsfDqyez1j6-c8oy0A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DU6DCYHFGZNI5OKC653DMZUHE4.jpg",
  //       "publishedAt": "2022-10-09T12:40:00Z",
  //       "content": "PERTH, Australia, Oct 9 (Reuters) - Openers Alex Hales and Jos Buttler blasted half-centuries to lead England to an eight-run win over Australia on Sunday in the first of three warm-up games before t… [+1996 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "The Guardian"
  //       },
  //       "author": "Simon Burnton at Optus Stadium",
  //       "title": "Buttler’s and Hales’s exhilarating start helps England to T20 win in Australia",
  //       "description": "1st T20: England, 208-6, beat Australia, 200-9, by eight runsOpeners put on 132 before Warner takes hosts close in run chase Turns out ring-rustiness is for mortals. Jos Buttler, playing his first competitive game since mid-August, …",
  //       "url": "https://www.theguardian.com/sport/2022/oct/09/australia-england-first-twenty20-match-report",
  //       "urlToImage": "https://i.guim.co.uk/img/media/29747b06cfbafd7d90c8779c536c5f1d0f572e4c/169_198_4997_2998/master/4997.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fcfb7b55f656d3fea0f93ef91b155acc",
  //       "publishedAt": "2022-10-09T12:45:51Z",
  //       "content": "Turns out ring-rustiness is for mortals. Jos Buttler, playing his first competitive game since mid-August, returned in remorseless, exhilarating style in this first Twenty20 against Australia, thrash… [+4480 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "The Indian Express"
  //       },
  //       "author": "Sports Desk",
  //       "title": "‘Thoda butterfly hai, excitement bhi bahut hai’: Suryakumar Yadav up for T20 World Cup challenge",
  //       "description": "Suryakumar Yadav shares the experience of India's first training session in Australia before the T20 World Cup.",
  //       "url": "https://indianexpress.com/article/sports/cricket/t20-world-cup-excited-suryakumar-yadav-up-for-down-under-challenge-with-butterflies-in-stomach-8198411/",
  //       "urlToImage": "https://images.indianexpress.com/2022/10/Suryakumar-Yadav-1.jpg",
  //       "publishedAt": "2022-10-09T04:54:20Z",
  //       "content": "There is no doubt that Suryakumar Yadav is India’s most bankable T20 match-winner. There is also no more reassuring sight than Suryakumar Yadav striding out to bat in a T20 game. In the upcoming T20 … [+2193 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Telegraph.co.uk"
  //       },
  //       "author": "Rob Bagchi",
  //       "title": "England vs Australia live: score and latest updates from first T20 international",
  //       "description": "Goodbye Sky, hello BT Sport.",
  //       "url": "https://www.telegraph.co.uk/cricket/2022/10/09/england-vs-australia-live-score-1st-t20-international-latest/",
  //       "urlToImage": "https://www.telegraph.co.uk/content/dam/cricket/2022/10/08/TELEMMGLPICT000309686451_trans_NvBQzQNjv4Bqa-WKReMtdLyt81ZFRRTS7eDHoCwZEOk_WcTu1uqIvUA.jpeg?impolicy=logo-overlay",
  //       "publishedAt": "2022-10-09T07:11:58Z",
  //       "content": "Will things ever be the same again? It's the final countdown ... England take on Australia  this morning in a day-nighter the first international cricket match in Perth since December 2019 after West… [+2146 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Hindustan Times"
  //       },
  //       "author": "HT Sports Desk",
  //       "title": "Hooda, Arshdeep burst into laughter as Chahal engages in fun banter with Harshal - Hindustan Times",
  //       "description": "Hooda, Arshdeep burst into laughter as Chahal engages in fun banter with Harshal  Hindustan Times\r\n. \"There Were Butterflies\": Suryakumar Yadav On First Practice Session In Australia Ahead Of T20 World..  NDTV Sports\r\n 'Butterflies and …",
  //       "url": "https://www.hindustantimes.com/cricket/chahal-tv-hindi-mein-hai-deepak-hooda-arshdeep-singh-burst-into-laughter-as-yuzvendra-chahal-engages-in-fun-banter-with-harshal-patel-in-australia-watch-101665292602360.html",
  //       "urlToImage": "https://images.hindustantimes.com/img/2022/10/09/1600x900/chahal_harshal_tv_1665294846554_1665294854531_1665294854531.JPG",
  //       "publishedAt": "2022-10-09T05:56:58Z",
  //       "content": "With Rohit Sharma-led Team India arriving in Australia for the 2022 edition of the T20 World Cup, the official social media handle of the Board of Control for Cricket in India (BCCI) has dropped anot… [+1741 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Hindustan Times"
  //       },
  //       "author": "HT Sports Desk",
  //       "title": "‘Replace him with Kishan or…’: Jaffer bats for IPL star's debut in 2nd ODI - Hindustan Times",
  //       "description": "‘Replace him with Kishan or…’: Jaffer bats for IPL star's debut in 2nd ODI  Hindustan Times\r\nMatch Preview - South Africa vs India, South Africa in India 2022/23, 2nd ODI  ESPNcricinfo\r\nIndia vs South Africa Live Score, 2nd ODI 2022:…",
  //       "url": "https://www.hindustantimes.com/cricket/you-can-replace-him-with-ruturaj-gaikwad-or-ishan-kishan-wasim-jaffer-wants-ipl-star-shahbaz-ahmed-to-make-india-debut-in-2nd-odi-vs-south-africa-101665289369042.html",
  //       "urlToImage": "https://images.hindustantimes.com/img/2022/10/09/1600x900/PTI10-08-2022-000251A-0_1665291291967_1665291291967_1665291307568_1665291307568.jpg",
  //       "publishedAt": "2022-10-09T04:56:30Z",
  //       "content": "Throwing weight behind an Indian Premier League (IPL) star, former Indian cricketer Wasim Jaffer feels Shikhar Dhawan &amp; Co. should alter their playing XI for the series decider against South Afri… [+1957 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "News18"
  //       },
  //       "author": "Cricketnext Staff",
  //       "title": "India vs South Africa 2022 Live Score, 2nd ODI: Shikhar Dhawan, Shubman Gill Begin IND's Chase of 279 - News18",
  //       "description": "India vs South Africa 2022 Live Score, 2nd ODI: Shikhar Dhawan, Shubman Gill Begin IND's Chase of 279  News18\r\nSouth Africa eye series and Super League lift  ESPNcricinfo\r\nIndia vs South Africa Live Score, 2nd ODI 2022: Siraj grabs t…",
  //       "url": "https://www.news18.com/cricketnext/news/india-vs-south-africa-live-cricket-score-2nd-odi-ind-vs-sa-2022-streaming-today-match-latest-updates-scorecard-jsca-stadium-ranchi-livenews-6129595.html",
  //       "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/10/india-vs-south-africa__31-166529893016x9.jpg",
  //       "publishedAt": "2022-10-09T12:22:17Z",
  //       "content": "couple of wickets as well.South Africa captain Keshav Maharaj won the toss and opted to bat first against India on Sunday. The tourists, who lead the three-match series 1-0, have made three changes t… [+3000 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Crictracker.com"
  //       },
  //       "author": "CricTracker Staff",
  //       "title": "AUS vs ENG Match Prediction – Who will win today’s match? - CricTracker",
  //       "description": "AUS vs ENG Match Prediction – Who will win today’s match?  CricTracker\r\n Match Preview - England vs Australia, England in Australia 2022/23, 1st T20I  ESPNcricinfo\r\n England, Australia look for finishing touches before World Cup | Cric…",
  //       "url": "https://www.crictracker.com/cricket-match-predictions/aus-vs-eng-match-prediction-1st-t20i-who-will-win-todays-match-between-australia-and-england-6648/",
  //       "urlToImage": "https://media.crictracker.com/media/attachments1662793677080_Aaron-Finch.jpeg",
  //       "publishedAt": "2022-10-09T06:00:00Z",
  //       "content": "Australia are set to host England in the first T20I match at Perth Stadium on Sunday. Australia returned to winnings ways with a 2-0 home series win against West Indies in the recent T20Is after losi… [+2810 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Hindustan Times"
  //       },
  //       "author": "HT Sports Desk",
  //       "title": "India's predicted XI for 2nd ODI vs SA: IPL star to feature in series decider? - Hindustan Times",
  //       "description": "India's predicted XI for 2nd ODI vs SA: IPL star to feature in series decider?  Hindustan Times\r\n South Africa eye series and Super League lift  ESPNcricinfo\r\n India vs South Africa Live Score, 2nd ODI 2022: SA bat first, Bavuma out, M…",
  //       "url": "https://www.hindustantimes.com/cricket/indias-predicted-xi-for-2nd-odi-vs-south-africa-ipl-star-to-feature-in-series-decider-at-ranchi-101665237658454.html",
  //       "urlToImage": "https://images.hindustantimes.com/img/2022/10/08/1600x900/PTI10-06-2022-000119B-0_1665241111516_1665241111516_1665241133468_1665241133468.jpg",
  //       "publishedAt": "2022-10-09T02:34:47Z",
  //       "content": "Team India suffered a huge blow ahead of the 2nd One Day International (ODI) as pacer Deepak Chahar was ruled out of the remainder of the bilateral series with an injury. Pacer Chahar, who was earlie… [+2550 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "CNA"
  //       },
  //       "author": null,
  //       "title": "Hales, Buttler lead England to win over Australia in T20 run-fest",
  //       "description": "PERTH, Australia: Openers Alex Hales and Jos Buttler blasted half-centuries to lead England to an eight-run win over Australia on Sunday (Oct 9) in the first of three warm-up games before the T20 World Cup starts later this month. England powered to 208-6 aft…",
  //       "url": "https://www.channelnewsasia.com/sport/hales-buttler-lead-england-win-over-australia-t20-run-fest-2998186",
  //       "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--oNZW4P8K--/c_crop,h_450,w_800,x_0,y_29/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2022-10-09t124045z_1_lynxmpei9804p_rtroptp_3_cricket-t20-eng-zaf-report.jpg?itok=Dxo93EhO",
  //       "publishedAt": "2022-10-09T12:40:00Z",
  //       "content": "PERTH, Australia: Openers Alex Hales and Jos Buttler blasted half-centuries to lead England to an eight-run win over Australia on Sunday (Oct 9) in the first of three warm-up games before the T20 Wor… [+1745 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Mirror Online"
  //       },
  //       "author": "Matthew Cooper",
  //       "title": "Jos Buttler explains why England didn't appeal Matthew Wade flashpoint in Australia win",
  //       "description": "Matthew Wade appeared to deliberately impede Mark Wood as he went for a catch in the first T20I between England and Australia, but captain Jos Buttler did not appeal",
  //       "url": "https://www.mirror.co.uk/sport/cricket/england-australia-buttler-wood-wade-28192161",
  //       "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article28192184.ece/ALTERNATES/s1200/0_jpg.jpg",
  //       "publishedAt": "2022-10-09T13:51:18Z",
  //       "content": "England captain Jos Buttler says he did not appeal for Matthew Wade to be given out for obstructing the field because it was \"a risky one to go for so early in the trip\". \r\n In a dramatic first T20I … [+1899 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Mirror Online"
  //       },
  //       "author": "mirrornews@mirror.co.uk (Matthew Cooper)",
  //       "title": "5 talking points as England beat Australia after Jos Buttler and Alex Hales masterclass",
  //       "description": "Jos Buttler, Alex Hales and Mark Wood all starred in England's dramatic eight run win over Australia ahead of the T20 World Cup",
  //       "url": "https://www.mirror.co.uk/sport/cricket/england-australia-butter-hales-wood-28191987",
  //       "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article28192048.ece/ALTERNATES/s1200/0_GettyImages-1243838003.jpg",
  //       "publishedAt": "2022-10-09T13:00:56Z",
  //       "content": "Jos Buttler and Alex Hales guided England to a brilliant eight run win over Australia after sharing a mammoth opening partnership, with Mark Wood also starring with the ball in a tense first T20I in … [+6657 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "the-times-of-india",
  //           "name": "The Times of India"
  //       },
  //       "author": "PTI",
  //       "title": "Jaishankar lauds India-NZ bilateral cricket ties, says nation will never forget Wright, Fleming",
  //       "description": "External affairs minister S Jaishankar lauded the bilateral cricketing ties with New Zealand, saying India will always be indebted to ex-coach John Wright and Stephen Fleming for their contributions to the game's development in the country.",
  //       "url": "https://timesofindia.indiatimes.com/india/jaishankar-lauds-india-nz-bilateral-cricket-ties-says-nation-will-never-forget-wright-fleming/articleshow/94739388.cms",
  //       "urlToImage": "https://static.toiimg.com/thumb/msid-94739373,width-1070,height-580,imgsize-41450,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //       "publishedAt": "2022-10-09T09:20:14Z",
  //       "content": ""
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Gadgets360.com"
  //       },
  //       "author": "Rahul Chettiyar, Akhil Arora, Siddharth Suvarna",
  //       "title": "IND vs SA 2nd ODI: How to Watch Live Stream",
  //       "description": "The India vs South Africa 2nd ODI will be played at the JSCA International Stadium Complex, Ranchi. The three-match tournament will be live-streamed on Disney+ Hotstar, alongside a TV broadcast on Star Sports Network.",
  //       "url": "https://gadgets360.com/entertainment/news/ind-vs-sa-odi-live-watch-online-2nd-3rd-india-match-stream-south-africa-date-time-3411342",
  //       "urlToImage": "https://i.gadgets360cdn.com/large/india_v_south_africa_2nd_odi_1665146506591.jpg",
  //       "publishedAt": "2022-10-09T02:30:01Z",
  //       "content": "India vs South Africa's second ODI will have millions of eyes glued to their TV screens, as the Blue army attempts to bounce back from Thursday's crushing defeat losing by merely nine runs in Lucknow… [+2552 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "NDTV News"
  //       },
  //       "author": "Vishesh Roy",
  //       "title": "SA20 \"In Great Position To Be Second-Best League\": Robin Peterson To NDTV",
  //       "description": "In an interview with NDTV, MI Cape Town General Manager Robin Peterson spoke about the upcoming SA20 and what to expect from the high-profile T20 competition.",
  //       "url": "https://sports.ndtv.com/cricket/sa20-in-great-position-to-be-second-best-t20-league-mi-cape-town-general-manager-robin-peterson-to-ndtv-3416118",
  //       "urlToImage": "https://c.ndtvimg.com/2022-10/nsg7gbv8_robin-peterson-afp-_625x300_09_October_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
  //       "publishedAt": "2022-10-09T13:35:07Z",
  //       "content": "Cricket South Africa's premier T20 competition will get underway on January 10 next year and six teams -- MI Cape Town, Durban Super Giants, Johannesburg Super Kings, Paarl Royals, Pretoria Capitals … [+4031 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "NDTV News"
  //       },
  //       "author": "NDTV Sports Desk",
  //       "title": "Watch: Kapil Dev's Remarks On IPL Players Feeling 'Pressure' Spark Debate",
  //       "description": "Legendary Indian cricketer Kapil Dev's comments on players feeling 'pressure' in IPL and other cricketing tournaments have sparked a huge debate. Kapil, giving an example of his own time, said that he used to play to enjoy the game and where there's enjoyment…",
  //       "url": "https://sports.ndtv.com/cricket/people-say-theres-pressure-in-ipl-i-would-say-dont-play-kapil-devs-remarks-spark-debate-3415367",
  //       "urlToImage": "https://c.ndtvimg.com/2021-04/0jsi9jio_kapil-dev-afp_650x400_08_April_21.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
  //       "publishedAt": "2022-10-09T07:19:20Z",
  //       "content": "One of the finest cricketers to ever grace the sport, Kapil Dev, is a legend in Indian cricket. As the sport becomes more fast-paced, since the arrival of T20 cricket, the dynamics of the game have c… [+1939 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "NDTV News"
  //       },
  //       "author": "NDTV Sports Desk",
  //       "title": "\"Hope That's Not The Case in T20 WC\": Jaffer On Decision in AUS v ENG T20I",
  //       "description": "Taking to Twitter, Wasim Jaffer highlighted that the boundary rope between the first T20I between Australia and England at Perth has been pushed inwards. Jaffer hopes the authorities don't do the same in the T20 World Cup 2022.",
  //       "url": "https://sports.ndtv.com/t20-world-cup-2022/hope-thats-not-the-case-in-t20-wc-wasim-jaffer-concerned-by-strange-decision-in-aus-vs-eng-1st-t20i-3415689",
  //       "urlToImage": "https://c.ndtvimg.com/2022-10/mpjkmj8o_perth-stadium_625x300_09_October_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
  //       "publishedAt": "2022-10-09T10:21:01Z",
  //       "content": "The T20 World Cup 2022 in Australia might be a few days away from its start but England have already arrived Down Under for a bilateral series. In a 3-match T20I series against the Aussies, the Engli… [+1897 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "NDTV News"
  //       },
  //       "author": "NDTV Sports Desk",
  //       "title": "\"Don't See X-Factor In These 2 That Pant Has\": Ex Selector On India Stars",
  //       "description": "Former chief selector Saba Karim feels Rishabh Pant remains India's first choice wicketkeeper, despite the presence of Sanju Samson and youngster Ishan Kishan.",
  //       "url": "https://sports.ndtv.com/cricket/dont-see-x-factor-in-these-2-that-rishabh-pant-has-ex-selector-on-india-stars-3415178",
  //       "urlToImage": "https://c.ndtvimg.com/2022-09/112o9pjg_rishabh-pant-afp_625x300_05_September_22.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
  //       "publishedAt": "2022-10-09T05:15:10Z",
  //       "content": "Former chief selector Saba Karim feels Rishabh Pant remains India's first choice wicketkeeper, despite the presence of Sanju Samson and youngster Ishan Kishan. While suggesting that Samson can play i… [+1289 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "NDTV News"
  //       },
  //       "author": "NDTV Sports Desk",
  //       "title": "What Skipper Jos Buttler Said About England's Chances At T20 World Cup",
  //       "description": "England white-ball captain Jos Buttler said that he doesn't see his team as \"favourites\" heading into the T20 World Cup",
  //       "url": "https://sports.ndtv.com/t20-world-cup-2022/what-skipper-jos-buttler-said-about-englands-chances-at-t20-world-cup-3414993",
  //       "urlToImage": "https://c.ndtvimg.com/2022-07/m69h1mpg_jos-buttler_640x480_18_July_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
  //       "publishedAt": "2022-10-09T02:43:46Z",
  //       "content": "Australia and England will face off in a three-match T20I series, which will be a dress rehearsal for the upcoming T20 World Cup, starting October 16. Speaking ahead of the 1st T20I, England white-ba… [+1227 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "NDTV News"
  //       },
  //       "author": "Abhimanyu Bose",
  //       "title": "Watch: Wade Blocks England Bowler From Taking Catch, Sparks Controversy",
  //       "description": "Australia vs England: Matthew Wade came under the scanner after he seemingly obstructed Mark Wood, who was trying to take a catch off his own bowling.",
  //       "url": "https://sports.ndtv.com/cricket/australia-vs-england-matthew-wade-blocks-mark-wood-from-taking-catch-sparks-controversy-watch-3416197",
  //       "urlToImage": "https://c.ndtvimg.com/2022-10/gpusq4lo_matthew-wade-mark-wood-twitter_625x300_09_October_22.jpg",
  //       "publishedAt": "2022-10-09T14:07:07Z",
  //       "content": "There was controversy during the first T20I between Australia and England as Matthew Wade seemingly blocked Mark Wood from taking a return catch in Perth. In the 17th over of Australia's chase of 209… [+1876 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "NDTV News"
  //       },
  //       "author": "NDTV Sports Desk",
  //       "title": "\"There Were Butterflies\": Suryakumar On First Net Session In Australia",
  //       "description": "In a video uploaded by BCCI, Suryakumar opened up on his first practice session in Australia ahead of the T20 World Cup.",
  //       "url": "https://sports.ndtv.com/t20-world-cup-2022/there-were-butterflies-suryakumar-yadav-on-first-practice-session-in-australia-ahead-of-t20-world-cup-3415045",
  //       "urlToImage": "https://c.ndtvimg.com/2022-10/a31q28lo_suryakumar-yadav_625x300_05_October_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
  //       "publishedAt": "2022-10-09T03:39:45Z",
  //       "content": "Rohit Sharma-led Team India reached Australia on Thursday to start their preparation for the T20 World Cup. The side will play two practice games against Western Australia on October 10 and 13 and th… [+1903 chars]"
  //   }
  // ]

  constructor(props) {
    super(props);
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title =
      this.props.category === "General"
        ? document.title
        : `${this.props.category} - QuickNews`;
  }

  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  async componentDidMount() {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.API}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  // handlePrev = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
  //     }&category=${this.props.category
  //     }&apiKey=42a9f7043f89472f848898bbd1e4e7eb&page=${this.state.page - 1
  //     }&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   this.setState({ loading: true });
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: parsedData.articles,
  //     page: this.state.page - 1,
  //     loading: false,
  //   });
  // };

  // handleNext = async () => {
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
  //       }&category=${this.props.category
  //       }&apiKey=42a9f7043f89472f848898bbd1e4e7eb&page=${this.state.page + 1
  //       }&pageSize=${this.props.pageSize}`;
  //     let data = await fetch(url);
  //     this.setState({ loading: true });
  //     let parsedData = await data.json();
  //     this.setState({
  //       articles: parsedData.articles,
  //       page: this.state.page + 1,
  //       loading: false,
  //     });
  //   }
  // };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center ">
            <em>Latest News Updates - Top {this.props.category} Headlines</em>
          </h2>
        </div>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      description={element.description}
                      urlSite={element.url}
                      urlImage={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark me-md-2"
            type="button"
            onClick={this.handlePrev}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            className="btn btn-dark"
            type="button"
            onClick={this.handleNext}
          >
            Next &raquo;
          </button>
        </div> */}
      </>
    );
  }
}
