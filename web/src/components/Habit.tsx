interface HabitsProps {
    completed: number
    name: string
}

// Componente: Reaproveitar / isolar
// Propriedade: Uma informação enviada para modificar um componente visual ou comportamentalmente

export default function Habit(props: HabitsProps) {
    return (
        <div className="bg-zinc-900 w-10 h-10 text-white m-2 flex">
            {props.completed}
            {props.name}
        </div>
    )
}