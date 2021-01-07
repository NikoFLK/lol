export interface summoners {
    pseudo: string;
    role: string; 
    creepScore: number;
    visionScore: number;
    objScore: number;
    killScore: number;
  };

export interface roles {
    role:string;
    icon:string;
};

export interface scores {
  value: number;
}