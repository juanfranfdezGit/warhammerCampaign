export default function DestacamentoDetalle({ destacamento }) {
  if (!destacamento) return null;

  return (
    <div className="destacamentoDetalle">
      <h3 className="destTitle">{destacamento.name}</h3>

      {destacamento.descriptions?.map((text, i) => (
        <p key={i}>{text}</p>
      ))}

      <div className="mejoraSection">
        <h3>Mejoras</h3>

        <h4 dangerouslySetInnerHTML={{ __html: destacamento.mejoratitle1 }} />
        <p>{destacamento.mejoradescription1}</p>

        <h4 dangerouslySetInnerHTML={{ __html: destacamento.mejoratitle2 }} />
        <p>{destacamento.mejoradescription2}</p>

        <h4 dangerouslySetInnerHTML={{ __html: destacamento.mejoratitle3 }} />
        <p>{destacamento.mejoradescription3}</p>

        <h4 dangerouslySetInnerHTML={{ __html: destacamento.mejoratitle4 }} />
        <p>{destacamento.mejoradescription4}</p>
      </div>
    </div>
  );
}
