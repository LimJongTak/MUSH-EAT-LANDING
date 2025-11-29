const Section1_Hero = () => {
  return (
    <section style={{ position: 'relative' }}>
      <div className="animate-up">
        <p style={{ color: '#F5D01F', fontWeight: 'bold', marginBottom: '10px' }}>
          [쫄깃한] [훈연향]
        </p>
        <h1 style={{ fontSize: '5rem', lineHeight: '1.1', fontWeight: '900', color: '#fff' }}>
          고기보다 더<br />
          고기 같은<br />
          <span style={{ color: '#F5D01F' }}>버 섯</span>
        </h1>
        
        {/* 이미지 들어갈 자리 */}
        <div className="img-placeholder" style={{ height: '500px', marginTop: '50px' }}>
           이미지 영역: 노릇하게 구워진 머쉬잇 슬라이스
        </div>
      </div>
    </section>
  );
};

export default Section1_Hero;