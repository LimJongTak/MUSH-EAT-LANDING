import React from 'react';
import { useLanguage } from '../LanguageContext';
import './ProductLabel.css';

// 각 언어별 번역 텍스트를 이름, 절대값, %값으로 분리하여 정의합니다.
const translations = {
  ko: {
    vitamin_d: '비타민 D', vitamin_d_abs: '0mcg', vitamin_d_pct: '0%',
    calcium: '칼슘', calcium_abs: '33mg', calcium_pct: '5%',
    iron: '철분', iron_abs: '2mg', iron_pct: '18%',
    potassium: '칼륨', potassium_abs: '157mg', potassium_pct: '4%',
  },
  en: {
    vitamin_d: 'Vitamin D', vitamin_d_abs: '0mcg', vitamin_d_pct: '0%',
    calcium: 'Calcium', calcium_abs: '33mg', calcium_pct: '5%',
    iron: 'Iron', iron_abs: '2mg', iron_pct: '18%',
    potassium: 'Potassium', potassium_abs: '157mg', potassium_pct: '4%',
  },
  ar: {
    vitamin_d: 'فيتامين د', vitamin_d_abs: '0 مكجم', vitamin_d_pct: '0%',
    calcium: 'كالسيوم', calcium_abs: '33 مجم', calcium_pct: '5%',
    iron: 'حديد', iron_abs: '2 مجم', iron_pct: '18%',
    potassium: 'بوتاسيوم', potassium_abs: '157 مجم', potassium_pct: '4%',
  }
};

const ProductLabel = ({ side }) => {
  const { t, language } = useLanguage(); // t와 함께 language 상태를 가져옵니다.

  if (side === 'back') {
    // 카드 뒷면: 상세 영양 정보
    return (
      <div className="nutrition-label">
        <div className="label-header">
          <h1 className="title">
            {t('detail_tab_nutri')}
          </h1>
        </div>
        <div className="bar-thick"></div>
        <div className="main-stat">
          <span className="main-stat-label">{t('nutri_cal')}</span>
          <span className="main-stat-value">{t('nutri_cal_val')}</span>
        </div>
        <div className="bar-thick"></div>
        <div className="daily-value-right">% Daily Value*</div>

        <div className="nutrient-row bold">
          <span>{t('nutri_sodium')}</span>
          <span>{t('nutri_sodium_val')}</span>
        </div>
        <div className="nutrient-row">
          <span style={{ paddingLeft: '15px' }}>{t('nutri_carb')}</span>
          <span>{t('nutri_carb_val')}</span>
        </div>
        <div className="nutrient-row" style={{ paddingLeft: '30px' }}>
          <span>{t('nutri_fiber')}</span>
          <span>{t('nutri_fiber_val')}</span>
        </div>
        <div className="nutrient-row" style={{ paddingLeft: '30px' }}>
          <span>{t('nutri_sugar')}</span>
          <span>{t('nutri_sugar_val')}</span>
        </div>
        <div className="nutrient-row" style={{ paddingLeft: '45px' }}>
          <span>{t('nutri_added_sugar')}</span>
          <span>{t('nutri_added_sugar_val')}</span>
        </div>
        <div className="nutrient-row bold">
          <span>{t('nutri_fat')}</span>
          <span>{t('nutri_fat_val')}</span>
        </div>
        <div className="nutrient-row" style={{ paddingLeft: '15px' }}>
          <span>{t('nutri_trans')}</span>
          <span>{t('nutri_trans_val')}</span>
        </div>
        <div className="nutrient-row" style={{ paddingLeft: '15px' }}>
          <span>{t('nutri_sat')}</span>
          <span>{t('nutri_sat_val')}</span>
        </div>
        <div className="nutrient-row bold">
          <span>{t('nutri_chol')}</span>
          <span>{t('nutri_chol_val')}</span>
        </div>
        <div className="nutrient-row bold">
          <span>{t('nutri_prot')}</span>
          <span>{t('nutri_prot_val')}</span>
        </div>
        <div className="bar-thick"></div>
        <div className="nutrient-row">
          <span>{translations[language]?.vitamin_d || translations.en.vitamin_d}</span>
          <span className="nutrient-values">{`${translations[language]?.vitamin_d_abs || translations.en.vitamin_d_abs} (${translations[language]?.vitamin_d_pct || translations.en.vitamin_d_pct})`}</span>
        </div>
        <div className="nutrient-row">
          <span>{translations[language]?.calcium || translations.en.calcium}</span>
          <span className="nutrient-values">{`${translations[language]?.calcium_abs || translations.en.calcium_abs} (${translations[language]?.calcium_pct || translations.en.calcium_pct})`}</span>
        </div>
        <div className="nutrient-row">
          <span>{translations[language]?.iron || translations.en.iron}</span>
          <span className="nutrient-values">{`${translations[language]?.iron_abs || translations.en.iron_abs} (${translations[language]?.iron_pct || translations.en.iron_pct})`}</span>
        </div>
        <div className="nutrient-row">
          <span>{translations[language]?.potassium || translations.en.potassium}</span>
          <span className="nutrient-values">{`${translations[language]?.potassium_abs || translations.en.potassium_abs} (${translations[language]?.potassium_pct || translations.en.potassium_pct})`}</span>
        </div>
      </div>
    );
  }

  // 카드 앞면: 제품 기본 정보 및 원재료
  return (
    <div className="nutrition-label">
      <div className="label-header">
        <h1 className="title">
          {t('product_info_title')} <span className="korean-title">{t('product_info_title_ko')}</span>
        </h1>
        <div className="serving-info">
          {t('product_info_name')}: {t('product_name')}
        </div>
      </div>

      <div className="bar-thick"></div>
      <div className="main-stat">
        <span className="main-stat-label">
          {t('product_info_weight')} <small>({t('product_info_weight_ko')})</small>
        </span>
        <span className="main-stat-value">190g</span>
      </div>
      <div className="bar-thick"></div>

      <div className="daily-value-right">{t('product_info_detail')}*</div>

      <div className="nutrient-row bold">
        <div className="nutrient-name"><span>{t('product_info_type')}</span><span>{t('product_info_type_ko')}</span></div>
        <span>{t('product_info_type_val')}</span>
      </div>
      <div className="nutrient-row bold">
        <div className="nutrient-name"><span>{t('product_info_storage')}</span><span>{t('product_info_storage_ko')}</span></div>
        <span>{t('product_info_storage_val')}</span>
      </div>
      <div className="nutrient-row"><div className="nutrient-name" style={{ paddingLeft: '15px' }}><i>{t('product_info_manu')}</i> {t('product_info_manu_ko')}</div><span>{t('product_info_manu_val')}</span></div>
      <div className="nutrient-row"><div className="nutrient-name" style={{ paddingLeft: '15px' }}><i>{t('product_info_dist')}</i> {t('product_info_dist_ko')}</div><span>{t('product_info_dist_val')}</span></div>
      <div className="nutrient-row"><div className="nutrient-name"><strong>{t('product_info_repo')}</strong> {t('product_info_repo_ko')}</div><span>{t('product_info_repo_val')}</span></div>

      <div className="bar-thick"></div>

      <div className="section-footer">
        <div className="ingredient-list">
          <span className="ingredient-title">{t('detail_tab_ing')}:</span>
          <p><strong>{t('ing_domestic_label')}</strong> {t('ing_domestic_list')}</p>
          <p style={{ marginTop: '5px' }}><strong>{t('ing_foreign_label')}</strong> {t('ing_foreign_list')}</p>
        </div>
        <div className="bar-thin"></div>
        <p style={{ fontSize: '11px', color: '#444' }}>
          * {t('product_info_allergy')}
          <br />
          * {t('product_info_warning')}
        </p>
      </div>
    </div>
  );
};

export default ProductLabel;