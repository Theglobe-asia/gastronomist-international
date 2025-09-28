import Card from '@/components/ui/Card'


export default function PressPage() {
return (
<div className="container py-12">
<h1 className="text-3xl font-bold mb-6">Press Release</h1>
<div className="space-y-4">
{[1,2,3].map(i => (
<Card key={i}>
<h3 className="font-semibold mb-1">Headline {i}</h3>
<p className="text-sm text-neutral-300">Short description. Media Writer tone.</p>
</Card>
))}
</div>
</div>
)
}