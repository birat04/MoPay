export type TxStatus = "Pending" | "Success" | "Failed"

export type TransactionItem = {
  id: string
  title: string
  date: string
  amount: string
  status: TxStatus
}

export function TransactionList({ items }: { items: TransactionItem[] }) {
  return (
    <section aria-label="Recent transactions" className="mx-auto w-full max-w-7xl px-4 md:px-6">
      <h2 className="mb-3 text-pretty text-xl font-semibold text-foreground md:text-2xl">Recent transactions</h2>
      <ul className="divide-y rounded-xl border bg-card text-card-foreground">
        {items.map((tx) => (
          <li key={tx.id} className="flex items-center justify-between p-4">
            <div>
              <div className="text-sm font-medium">{tx.title}</div>
              <div className="text-xs text-muted-foreground">{tx.date}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">{tx.amount}</span>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                  tx.status === "Success" 
                    ? "border-transparent bg-green-100 text-green-800" 
                    : tx.status === "Pending" 
                    ? "border-transparent bg-yellow-100 text-yellow-800" 
                    : "border-transparent bg-red-100 text-red-800"
                }`}
              >
                {tx.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
