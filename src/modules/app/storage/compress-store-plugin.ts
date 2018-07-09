import * as lzString from 'lz-string';

export function compressStorePlugin() {

  return {

    set(
      superFn: (key: string, value: string) => void,
      key: string,
      value: any
    ): void {
      const compressed = lzString.compressToUTF16(
        this._serialize(value)
      );
      superFn(key, compressed);
    },

    get(
      superFn: (key: string) => string,
      key: string
    ): string {
      const value = superFn(key);
      if (value === undefined) {
        return value;
      }
      try {
        const decompressed = lzString.decompressFromUTF16(value);
        const deserialized = this._deserialize(decompressed);
        return deserialized;
      } catch {
        return value;
      }
    }

  };

}
