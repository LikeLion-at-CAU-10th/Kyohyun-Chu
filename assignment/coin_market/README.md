# Coin_Market
CSS 더 꾸미고 싶었는데 시간 부족으로 핵심 기능만 구현했습니다ㅠ UI가 허접하지만, 예쁘게(?) 봐주세요😊

### Overview
<img width="1431" alt="스크린샷 2022-08-02 오후 4 17 14" src="https://user-images.githubusercontent.com/81007078/182315187-03105ae7-9616-4c1b-966c-d412813f6ce2.png"><img width="1431" alt="스크린샷 2022-08-02 오후 4 17 31" src="https://user-images.githubusercontent.com/81007078/182315244-5f41f226-eca3-4330-a02b-9da5b1a16b98.png">



## Initial Settings w/ NextJS
1. npm install -g create-next-app
2. npx create-next-app --typescript “프로젝트 이름”
3. npm run dev or yarn dev

### _document.tsx
meta 태그를 정의하거나, 전체 페이지를 관여하는 컴포넌트입니다.
```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*  모든페이지에 아래 메타테크가 head에 들어감 // 루트파일이기에 가능한
          적은 코드만 넣어야함 전역 파일을 엉망으로 만들면 안된다 // 웹 타이틀,
          ga 같은것 넣음 */}
          <meta property="custom" content="123123" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```
### styled-components
$ yarn add styled-components && yarn add -D babel-plugin-styled-components

## Mock Server w/ axios
<img width="1005" alt="스크린샷 2022-08-02 오후 4 24 28" src="https://user-images.githubusercontent.com/81007078/182316535-bfa8227e-922c-471a-859f-0d4b39166e43.png">

URL : https://f8486a5c-579f-4369-8f5c-332563cf73fe.mock.pstmn.io/list
```javascript
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(
          'https://f8486a5c-579f-4369-8f5c-332563cf73fe.mock.pstmn.io/list',
        )
        setData(res.data)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    fetchData()
  }, [])
  ```
