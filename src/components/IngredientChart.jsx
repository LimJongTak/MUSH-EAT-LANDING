import React from 'react';
import { useLanguage } from '../LanguageContext';
import './IngredientChart.css'; // 스타일 파일 import

const IngredientChart = () => {
  const { t } = useLanguage();

  // 성분 데이터 (범례 및 차트 생성을 위해 정의)
  const ingredients = [
    { name: t('chart_total_fat'), color: '#FAD7C3' },
    { name: t('chart_sat_fat'), color: '#F4511E' },
    { name: t('chart_sodium'), color: '#7DE4EA' },
    { name: t('chart_carbs'), color: '#F06292' },
    { name: t('chart_protein'), color: '#4CAF50' },
    { name: t('chart_calcium'), color: '#FFFFFF' },
    { name: t('chart_iron'), color: '#D32F2F' },
  ];

  return (
    <div className="ingredient-card">
      <div className="card-body">
        {/* 왼쪽: 범례 (Legend) */}
        <ul className="legend-list">
          {ingredients.map((item, index) => (
            <li key={index} className="legend-item">
              <span className="dot" style={{ backgroundColor: item.color }}></span>
              <span className="text" dangerouslySetInnerHTML={{ __html: item.name }} />
            </li>
          ))}
        </ul>

        {/* 오른쪽: 도넛 차트 */}
        <div className="chart-wrapper">
          <div className="donut-chart">
            <div className="center-text" dangerouslySetInnerHTML={{ __html: t('chart_center_text').replace(/\n/g, '<br />') }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientChart;