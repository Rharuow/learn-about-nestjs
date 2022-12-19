import { IsNotEmpty } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty({ message: 'Name attribute is not empty' })
  name: string;

  function: string;
}
