import { Snowflake } from "discord.js";

interface CommandData
{
    name: string;
    nameLoc?: {};

    desc?: string;
    descLoc?: {};

    guilds?: Snowflake[];
    guildOnly?: boolean;
    ownerOnly?: boolean;

    userPerms?: string[];
    clientPerms?: string[];

    throttleOptions?: any[];
    options?: any[];

    devOnly?: boolean;
    enabled?: boolean;
}

abstract class Command
{
    public Data: CommandData;
    public abstract Client;

    constructor(options:
        | {type: 1} & CommandData
        | {type: 2 | 3} & Omit<CommandData,
            | 'desc'
            | 'descLoc'
            | 'guilds'
            | 'guildOnly'
            | 'ownerOnly'
            | 'options'
            >
    )
    {
       this.Data = options 
    }

    public abstract exec(interaction);
}

export abstract class CommandGroup extends Command
{
    protected Collection;

    constructor(options:
        | {type: 1} & Omit<CommandData, 
            | 'userPerms'
            | 'clientPerms'
            | 'throttleOptions'
            | 'options'
            >
        | {type: 2} & Omit<CommandData, 
            | 'guilds'
            | 'guildOnly'
            | 'ownerOnly'
            | 'userPerms'
            | 'clientPerms'
            | 'throttleOptions'
            | 'options'
            >
    )
    {
        super(options)
    }

    public exec(interaction)
    {
    } 
}

export default Command