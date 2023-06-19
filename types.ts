type UnknownGraphKey = string;
type UnknownPromise = Promise<unknown>;

export type GraphValue = UnknownGraphKey | UnknownPromise;

export type UnknownGraph = Record<
  UnknownGraphKey,
  UnknownPromise | Record<string, GraphValue>
>;