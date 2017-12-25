'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 日期格式化
var time = exports.time = function time(date) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd HH:mm:ss';

    var pad = function pad(s) {
        return ('0' + s).slice(-2);
    };
    var dt = new Date(+date);
    var parse = {
        MM: dt.getMonth() + 1,
        dd: dt.getDate(),
        HH: dt.getHours(),
        mm: dt.getMinutes(),
        ss: dt.getSeconds()
    };
    Object.keys(parse).forEach(function (v) {
        return parse[v] = pad(parse[v]);
    });
    parse.yyyy = dt.getFullYear();
    return Object.entries(parse).reduce(function (prev, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        prev = prev.replace(k, v);
        return prev;
    }, format);
};

// 距离当前日期
var getDateFromNow = exports.getDateFromNow = function getDateFromNow(_ref3) {
    var _ref3$year = _ref3.year,
        year = _ref3$year === undefined ? 0 : _ref3$year,
        _ref3$month = _ref3.month,
        month = _ref3$month === undefined ? 0 : _ref3$month,
        _ref3$day = _ref3.day,
        day = _ref3$day === undefined ? 0 : _ref3$day;

    var dt = new Date();
    dt.setFullYear(dt.getFullYear() + year);
    dt.setDate(dt.getDate() + day);
    return dt;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUuanMiXSwibmFtZXMiOlsidGltZSIsImRhdGUiLCJmb3JtYXQiLCJwYWQiLCJzIiwic2xpY2UiLCJkdCIsIkRhdGUiLCJwYXJzZSIsIk1NIiwiZ2V0TW9udGgiLCJkZCIsImdldERhdGUiLCJISCIsImdldEhvdXJzIiwibW0iLCJnZXRNaW51dGVzIiwic3MiLCJnZXRTZWNvbmRzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2IiwieXl5eSIsImdldEZ1bGxZZWFyIiwiZW50cmllcyIsInJlZHVjZSIsInByZXYiLCJrIiwicmVwbGFjZSIsImdldERhdGVGcm9tTm93IiwieWVhciIsIm1vbnRoIiwiZGF5Iiwic2V0RnVsbFllYXIiLCJzZXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsc0JBQU8sU0FBUEEsSUFBTyxDQUFDQyxJQUFELEVBQTBDO0FBQUEsUUFBbkNDLE1BQW1DLHVFQUExQixxQkFBMEI7O0FBQzFELFFBQU1DLE1BQU0sU0FBTkEsR0FBTTtBQUFBLGVBQUssT0FBSUMsQ0FBSixFQUFRQyxLQUFSLENBQWMsQ0FBQyxDQUFmLENBQUw7QUFBQSxLQUFaO0FBQ0EsUUFBTUMsS0FBSyxJQUFJQyxJQUFKLENBQVMsQ0FBQ04sSUFBVixDQUFYO0FBQ0EsUUFBTU8sUUFBUTtBQUNWQyxZQUFJSCxHQUFHSSxRQUFILEtBQWdCLENBRFY7QUFFVkMsWUFBSUwsR0FBR00sT0FBSCxFQUZNO0FBR1ZDLFlBQUlQLEdBQUdRLFFBQUgsRUFITTtBQUlWQyxZQUFJVCxHQUFHVSxVQUFILEVBSk07QUFLVkMsWUFBSVgsR0FBR1ksVUFBSDtBQUxNLEtBQWQ7QUFPQUMsV0FBT0MsSUFBUCxDQUFZWixLQUFaLEVBQW1CYSxPQUFuQixDQUEyQjtBQUFBLGVBQUtiLE1BQU1jLENBQU4sSUFBV25CLElBQUlLLE1BQU1jLENBQU4sQ0FBSixDQUFoQjtBQUFBLEtBQTNCO0FBQ0FkLFVBQU1lLElBQU4sR0FBYWpCLEdBQUdrQixXQUFILEVBQWI7QUFDQSxXQUFPTCxPQUFPTSxPQUFQLENBQWVqQixLQUFmLEVBQXNCa0IsTUFBdEIsQ0FBNkIsVUFBQ0MsSUFBRCxRQUFrQjtBQUFBO0FBQUEsWUFBVkMsQ0FBVTtBQUFBLFlBQVBOLENBQU87O0FBQ2xESyxlQUFPQSxLQUFLRSxPQUFMLENBQWFELENBQWIsRUFBZ0JOLENBQWhCLENBQVA7QUFDQSxlQUFPSyxJQUFQO0FBQ0gsS0FITSxFQUdKekIsTUFISSxDQUFQO0FBSUgsQ0FoQk07O0FBa0JQO0FBQ08sSUFBTTRCLDBDQUFpQixTQUFqQkEsY0FBaUIsUUFBb0M7QUFBQSwyQkFBbENDLElBQWtDO0FBQUEsUUFBbENBLElBQWtDLDhCQUEzQixDQUEyQjtBQUFBLDRCQUF4QkMsS0FBd0I7QUFBQSxRQUF4QkEsS0FBd0IsK0JBQWhCLENBQWdCO0FBQUEsMEJBQWJDLEdBQWE7QUFBQSxRQUFiQSxHQUFhLDZCQUFQLENBQU87O0FBQzlELFFBQU0zQixLQUFLLElBQUlDLElBQUosRUFBWDtBQUNBRCxPQUFHNEIsV0FBSCxDQUFlNUIsR0FBR2tCLFdBQUgsS0FBbUJPLElBQWxDO0FBQ0F6QixPQUFHNkIsT0FBSCxDQUFXN0IsR0FBR00sT0FBSCxLQUFlcUIsR0FBMUI7QUFDQSxXQUFPM0IsRUFBUDtBQUNILENBTE0iLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOaXpeacn+agvOW8j+WMllxuZXhwb3J0IGNvbnN0IHRpbWUgPSAoZGF0ZSwgZm9ybWF0ID0gJ3l5eXktTU0tZGQgSEg6bW06c3MnKSA9PiB7XG4gICAgY29uc3QgcGFkID0gcyA9PiBgMCR7c31gLnNsaWNlKC0yKVxuICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoK2RhdGUpXG4gICAgY29uc3QgcGFyc2UgPSB7XG4gICAgICAgIE1NOiBkdC5nZXRNb250aCgpICsgMSxcbiAgICAgICAgZGQ6IGR0LmdldERhdGUoKSxcbiAgICAgICAgSEg6IGR0LmdldEhvdXJzKCksXG4gICAgICAgIG1tOiBkdC5nZXRNaW51dGVzKCksXG4gICAgICAgIHNzOiBkdC5nZXRTZWNvbmRzKClcbiAgICB9XG4gICAgT2JqZWN0LmtleXMocGFyc2UpLmZvckVhY2godiA9PiBwYXJzZVt2XSA9IHBhZChwYXJzZVt2XSkpXG4gICAgcGFyc2UueXl5eSA9IGR0LmdldEZ1bGxZZWFyKClcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGFyc2UpLnJlZHVjZSgocHJldiwgW2ssIHZdKSA9PiB7XG4gICAgICAgIHByZXYgPSBwcmV2LnJlcGxhY2UoaywgdilcbiAgICAgICAgcmV0dXJuIHByZXZcbiAgICB9LCBmb3JtYXQpXG59XG5cbi8vIOi3neemu+W9k+WJjeaXpeacn1xuZXhwb3J0IGNvbnN0IGdldERhdGVGcm9tTm93ID0gKHt5ZWFyID0gMCwgbW9udGggPSAwLCBkYXkgPSAwfSkgPT4ge1xuICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoKVxuICAgIGR0LnNldEZ1bGxZZWFyKGR0LmdldEZ1bGxZZWFyKCkgKyB5ZWFyKVxuICAgIGR0LnNldERhdGUoZHQuZ2V0RGF0ZSgpICsgZGF5KVxuICAgIHJldHVybiBkdFxufVxuIl19