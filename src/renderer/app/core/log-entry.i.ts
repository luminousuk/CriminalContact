export interface ILogEntry {
  readonly timestamp: number;
  readonly severity: LogSeverity;
  readonly message: string;
  readonly category?: string;
  readonly error?: Error;
}

export enum LogSeverity {
  Debug = 0,
  Info = 1,
  Warning = 2,
  Error = 3,
  Critical = 4
}
