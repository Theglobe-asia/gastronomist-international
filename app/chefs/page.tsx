import Card from '@/components/ui/Card'


export default function ChefsPage() {
return (
<div className="container py-12">
<h1 className="text-3xl font-bold mb-6">Our Chefs</h1>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{[...Array(6)].map((_, i) => (
<Card key={i}>
<div className="h-40 rounded-xl bg-white/10 mb-4" />
<h3 className="font-semibold">Chef {i + 1}</h3>
<p className="text-sm text-neutral-400">Modern gastronomy specialist.</p>
</Card>
))}
</div>
</div>
)
}