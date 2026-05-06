export default function DestacamentoDetalle({ destacamento }) {
  if (!destacamento) return null;

  return (
    <div className="destacamentoDetalle">
      <h3>{destacamento.name}</h3>

      <p>{destacamento.description1}</p>
      <p>{destacamento.description2}</p>
      <p>{destacamento.description3}</p>
      <p>{destacamento.description4}</p>

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
