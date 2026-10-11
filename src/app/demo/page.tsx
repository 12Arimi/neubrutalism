import Header from "@/components/Header";

const stats = [
  { label: "Users", value: "1,284", color: "bg-pink-300" },
  { label: "Orders", value: "342", color: "bg-cyan-300" },
  { label: "Revenue", value: "$12.4k", color: "bg-lime-300" },
];

const orders = [
  { id: "#1001", customer: "Amina Wanjiru", item: "Wireless Mouse", status: "Delivered" },
  { id: "#1002", customer: "Brian Otieno", item: "USB-C Hub", status: "Shipped" },
  { id: "#1003", customer: "Carol Njeri", item: "Laptop Stand", status: "Pending" },
  { id: "#1004", customer: "David Kamau", item: "Mechanical Keyboard", status: "Delivered" },
  { id: "#1005", customer: "Esther Achieng", item: "Webcam", status: "Pending" },
];

const statusColor: Record<string, string> = {
  Delivered: "bg-lime-300",
  Shipped: "bg-cyan-300",
  Pending: "bg-yellow-300",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-orange-50 text-black">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-black uppercase">Demo Dashboard</h1>

        <section className="mt-6 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`${s.color} border-4 border-black p-4 shadow-[6px_6px_0_0_#000]`}
            >
              <p className="text-sm font-bold uppercase">{s.label}</p>
              <p className="text-3xl font-black">{s.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-xl font-black uppercase">Recent Orders</h2>
          <div className="overflow-x-auto border-4 border-black bg-white shadow-[8px_8px_0_0_#000]">
            <table className="w-full text-left text-sm">
              <thead className="border-b-4 border-black bg-black text-white">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Item</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b-2 border-black last:border-b-0">
                    <td className="p-3 font-bold">{o.id}</td>
                    <td className="p-3">{o.customer}</td>
                    <td className="p-3">{o.item}</td>
                    <td className="p-3">
                      <span
                        className={`${statusColor[o.status]} border-2 border-black px-2 py-0.5 text-xs font-bold`}
                      >
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}