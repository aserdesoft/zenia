/**
 * Utilidad para medir Web Vitals (INP, LCP, CLS, FCP, TTFB)
 * 
 * Para usar:
 * 1. Instalar web-vitals: npm install web-vitals
 * 2. Importar en main.jsx: import reportWebVitals from './utils/reportWebVitals'
 * 3. Llamar: reportWebVitals(console.log)
 */

export default function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    }).catch(() => {
      console.log('web-vitals no está instalado. Ejecuta: npm install web-vitals');
    });
  }
}

// Función helper para formatear resultados
export function logWebVitals(metric) {
  const { name, value, rating } = metric;
  
  const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
  
  console.log(`${emoji} ${name}: ${Math.round(value)}ms (${rating})`);
  
  // Recomendaciones específicas
  if (name === 'INP' && rating !== 'good') {
    console.log('💡 Tip: Reduce JavaScript largo, usa debouncing en event handlers');
  }
  if (name === 'LCP' && rating !== 'good') {
    console.log('💡 Tip: Optimiza imágenes, usa CDN, preload recursos críticos');
  }
  if (name === 'CLS' && rating !== 'good') {
    console.log('💡 Tip: Define width/height en imágenes, evita insertar contenido dinámico');
  }
}

// Para usar en main.jsx:
// import reportWebVitals, { logWebVitals } from './utils/reportWebVitals'
// reportWebVitals(logWebVitals)

