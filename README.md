<div align="center">
  <h1>🍄 Mush-Eat (머쉬잇) 랜딩 페이지</h1>
  <p>표고버섯으로 만든 100% 식물성 대체육, '머쉬잇'의 매력을 소개하는 인터랙티브 랜딩 페이지입니다.</p>
</div>

<br />

이 프로젝트는 **React**와 **Vite**를 기반으로 제작되었으며, 다국어 지원 및 스크롤 기반의 동적인 애니메이션을 통해 사용자에게 매력적인 경험을 제공하는 것을 목표로 합니다.

✨ **Live Demo:** [https://musheat.onrender.com]

---

## 🚀 주요 기능

- **반응형 웹 디자인**: 데스크탑, 태블릿, 모바일 등 모든 디바이스에서 최적화된 화면을 제공합니다.
- **다국어 지원 (i18n)**: 한국어, 영어, 아랍어를 지원하여 글로벌 사용자를 대상으로 합니다.
- **인터랙티브 스크롤 애니메이션**:
  - `IntersectionObserver` API를 활용하여 스크롤에 따라 이미지와 텍스트가 부드럽게 나타나는 효과를 구현했습니다.
  - 이미지의 가시성 비율에 따라 투명도와 크기가 동적으로 조절됩니다.
- **컴포넌트 기반 아키텍처**: 재사용 가능한 컴포넌트로 UI를 구성하여 유지보수성을 높였습니다.
- **CSS 스타일링**: 각 컴포넌트별로 CSS 파일을 분리하여 스타일을 체계적으로 관리합니다.

## 🛠️ 사용된 기술

- **Framework**: React.js
- **Build Tool**: Vite
- **Styling**: CSS3
- **Language**: JavaScript
- **APIs**: Intersection Observer API

## 📂 프로젝트 구조

```
/src
├── /components  # 각 섹션별 UI 컴포넌트
├── /hooks       # 재사용 가능한 커스텀 훅 (useScrollAnimation)
├── App.jsx      # 메인 애플리케이션 컴포넌트
├── LanguageContext.js # 다국어 상태 관리
└── translations.js    # 다국어 텍스트 데이터
```

## ⚙️ 시작하기

1.  **저장소 복제:**
    ```bash
    git clone https://github.com/your-username/mush-eat-landing.git
    ```
2.  **의존성 설치:**
    ```bash
    npm install
    ```
3.  **개발 서버 실행:**
    ```bash
    npm run dev
    ```

## 📜 사용 가능한 스크립트

- `npm run dev`: 개발 모드로 프로젝트를 실행합니다.
- `npm run build`: 프로덕션용으로 프로젝트를 빌드합니다.
- `npm run preview`: 빌드된 결과물을 로컬에서 미리 봅니다.
