interface InteractionData
{
    name: string;
    type: number;
    enabled?: boolean;
}

export abstract class Interaction
{
    public Data: InteractionData;
    public abstract Client;

    constructor(options: InteractionData)
    {
       this.Data = options 
    }

    public abstract exec(interaction);
}

export default Interaction