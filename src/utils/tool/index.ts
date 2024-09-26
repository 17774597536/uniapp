/**
 * 防抖
 * @param func 回调函数
 * @param delay 时间
 */
export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout | null = null;

    return function (...args: Parameters<T>) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

/**
 * 深拷贝
 * @param data
 * @param map
 */
export const deepClone = (data:any, map = new WeakMap()) => {
    if (typeof data === 'object') {
        let cloneData:any = Array.isArray(data) ? [] : {}
        if (map.get(data)) {
            return map.get(data)
        }
        map.set(data, cloneData)
        for (let key in data) {
            cloneData[key] = deepClone(data[key], map)
        }
        return cloneData
    } else {
        return data
    }
}

/**
 * 截取url文件名称
 * @param url
 */
export const extractFileName = (url: string) => {
    const parts = url.split('/');
    const fileName = parts[parts.length - 1];
    const nameParts = fileName.split('.');
    return nameParts[0];
}