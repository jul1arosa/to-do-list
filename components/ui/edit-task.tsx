import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { SquarePen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditTask = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<SquarePen size={16} className="cursor-pointer bg-gray-100" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Editar tarefa</DialogTitle>
				</DialogHeader>

				<div className="flex gap-2">
					<Input placeholder="Editar tarefa" />
					<Button className="cursor-pointer">Salvar</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default EditTask;
