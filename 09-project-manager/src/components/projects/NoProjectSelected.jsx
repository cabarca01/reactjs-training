import logoImg from '../../../assets/no-projects.jsx'
import Button from '../UI/Button.jsx'
export default function NoProjectSelected() {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={logoImg} className="w-16 h-16 object-contain mx-auto" alt='Clipboard with pen'/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
            <p className="text-stone-400 mb-4">Please elect a project inthe sidebar or add a new one</p>

            <p className="mt-8">
               <Button>Create new project</Button>
            </p>
        </div>
    )
}