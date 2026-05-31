interface TechSpec {
  parameter: string;
  specification: string;
  unit: string;
}

interface Props {
  specs: TechSpec[];
}

const SpecTable = ({ specs }: Props) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm min-w-[500px] md:min-w-0">
        <thead>
          <tr className="bg-secondary">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Parameter</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Specification</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Unit</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, i) => (
            <tr
              key={spec.parameter}
              className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"}`}
            >
              <td className="px-4 py-3 text-muted-foreground">{spec.parameter}</td>
              <td className="px-4 py-3 text-foreground font-medium">{spec.specification}</td>
              <td className="px-4 py-3 text-muted-foreground">{spec.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
