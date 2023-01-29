interface EventData
{
	name: string;
	once?: boolean;
}

abstract class Event
{
	public Data: EventData;
	public abstract Client;

	constructor(options: EventData)
    {
		this.Data = options
	}

	public abstract exec(...args: any[]): any;
}

export default Event;