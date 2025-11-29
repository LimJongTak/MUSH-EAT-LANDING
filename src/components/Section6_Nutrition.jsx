const Section6_Nutrition = () => {
  // 숫자 스타일
  const numStyle = { fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: '900', color: '#F5D01F', lineHeight: '1' };
  const labelStyle = { fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', marginTop: '10px' };
  const descStyle = { fontSize: '0.9rem', color: '#EEE1A8' };

  return (
    <section>
      <div className="animate-up">
        <h2>
          맛은 무겁게<br />
          <span style={{ color: '#F5D01F' }}>칼로리는 가볍게</span>
        </h2>
        <p style={{ marginBottom: '60px' }}>
          돼지고기 햄의 묵직한 풍미와 식감은 그대로 유지하면서, 칼로리는 놀랍도록 낮췄습니다.<br/>
          당신의 몸이 원하는 가벼움, 숫자가 증명합니다.
        </p>
        
        {/* [수정됨] 반응형 클래스(responsive-grid) 적용 */}
        <div className="responsive-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', // 기본(데스크탑)은 2열
          gap: '40px', 
          width: '100%', 
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* 1. 칼로리 */}
          <div>
            <div style={numStyle}>125<span style={{fontSize:'2rem'}}>kcal</span></div>
            <div style={labelStyle}>놀랍도록 가벼운 열량</div>
            <div style={descStyle}>부담 없이 즐기는 미식</div>
          </div>
          
          {/* 2. 단백질 */}
          <div>
            <div style={numStyle}>11.7<span style={{fontSize:'2rem'}}>g</span></div>
            <div style={labelStyle}>꽉 찬 식물성 단백질</div>
            <div style={descStyle}>활력을 채우는 에너지</div>
          </div>
          
          {/* 3. 콜레스테롤 */}
          <div>
            <div style={numStyle}>0<span style={{fontSize:'2rem'}}>mg</span></div>
            <div style={labelStyle}>콜레스테롤 제로</div>
            <div style={descStyle}>혈관까지 생각한 선택</div>
          </div>
          
          {/* 4. 항생제 */}
          <div>
            <div style={numStyle}>NO</div>
            <div style={labelStyle}>항생제 & 호르몬</div>
            <div style={descStyle}>자연이 만든 순수함</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6_Nutrition;