  export interface Events {
      id: string;
      eventName: string;
      locationName: string;
      coachName: string;
      date: Date;
      maxPax: number;
      currentPax: number;
      kind: string;
  }

  export interface Data {
      data: Events[];
      skip: number;
      limit: number;
      total: number;
      updatedAt: number;
  }
