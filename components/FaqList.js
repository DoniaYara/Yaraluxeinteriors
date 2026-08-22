export default function FaqList({ items, className = "faq-grid" }) {
  return (
    <div className={className}>
      {items.map((item, i) => {
        const paras = Array.isArray(item.a) ? item.a : [item.a];
        return (
          <details className="faq-item" key={item.q} open={i === 0}>
            <summary className="faq-q">
              <span className="faq-qt">{item.q}</span>
              <span className="faq-ic">+</span>
            </summary>
            <div className="faq-a">
              {paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
}
