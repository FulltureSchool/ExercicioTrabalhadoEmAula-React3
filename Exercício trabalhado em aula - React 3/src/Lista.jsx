function Lista({ turmas }) {
  console.log("atualizou o componente lista");
  return (
    <div>
      <ul>
        <li>Idade: 25</li>
        <li>Profissaão: Professor</li>
      </ul>

      <h2>Turmas</h2>
      <ul>
        {turmas.map((turma) => (
          <li key={turma}>{turma}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
